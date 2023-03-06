from .models import University
from flask_marshmallow import Marshmallow

ma = Marshmallow()


class UniversitySerializer(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = University
        load_instance = True


