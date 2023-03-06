from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_refresh_token, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash
from .models import User, db
import validators

auth = Blueprint('auth', __name__, url_prefix='/api/v1/auth')


@auth.route('/register', methods=['POST'])
def register():
    name = request.json['name']
    email = request.json['email']
    password = request.json['password']
    password2 = request.json['password2']
    pwd_hash = generate_password_hash(password)
    pwd_hash2 = pwd_hash

    if password != password2:
        return jsonify({
            'message': 'password not validate '
        })

    if not validators.email(email):
        return 400

    user = User(name=name, email=email, password=pwd_hash, password2=pwd_hash2)
    db.session.add(user)
    db.session.commit()

    return jsonify({
        'create:user':
            {
                'name': name,
                'email': email,
                'password': password
            }
    }), 201


@auth.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')

    user = User.query.filter_by(email=email).first()

    if user:
        pass_correct = check_password_hash(user.password, password)

        if pass_correct:
            access_token = create_access_token(identity=user.id)
            refresh_token = create_refresh_token(identity=user.id)
            return jsonify({
                'user': {
                    'refresh': refresh_token,
                    'access': access_token,
                    'user': user.name,
                    'email': user.email
                }
            }), 200
    else:
        return jsonify({
            'message': 'Не верный пароль'
        }), 400


@auth.route('/me', methods=['GET'])
@jwt_required()
def me():
    user_id = get_jwt_identity()
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        'username': user.name,
        'email': user.email,
        'id': user.id
    }), 200


@auth.route('/token/refresh', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    access = create_access_token(identity=identity)

    return jsonify({
        'accees': access
    }), 200
