from flask import Blueprint, jsonify
from .serializers import UniversitySerializer
from .models import University

api = Blueprint('api', __name__, url_prefix='/api/v1')


@api.route('/university_list', methods=['GET'])
def university_list():
    university = University.query.all()
    university_schema = UniversitySerializer()
    result = university_schema.dump(university, many=True)
    return jsonify({
        "university": result
    }), 200


@api.route('/university/<slug>', methods=['GET'])
def university_detail(slug):
    university = University.query.filter_by(slug=slug).first_or_404()
    university_schema = UniversitySerializer()
    result = university_schema.dump(university)
    return jsonify({
        'data': result
    })


