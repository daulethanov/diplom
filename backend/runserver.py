from flask import Flask
from flask_jwt_extended import JWTManager
from .auth import auth
from .university import api
from .models import db

app = Flask(__name__)
app.config.from_pyfile('config.py')
db.init_app(app)
app.app_context().push()
db.create_all()
JWTManager(app)
app.register_blueprint(api)
app.register_blueprint(auth)

if __name__ == '__main__':
    app.run()
