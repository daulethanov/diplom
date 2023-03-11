from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from .auth import auth
from flask_marshmallow import Marshmallow
from .university import api
from .models import db
from .admin import admin
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_pyfile('config.py')
db.init_app(app)
admin.init_app(app)
migrate = Migrate(app, db)
app.app_context().push()
ma = Marshmallow(app)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
db.create_all()
JWTManager(app)

app.register_blueprint(api)
app.register_blueprint(auth)

if __name__ == '__main__':
    app.run()
