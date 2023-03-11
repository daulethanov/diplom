from sqlalchemy.orm import relationship, backref

from .Enum import City, Specialization
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from slugify import slugify

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    email = db.Column(db.String(100), unique=True)
    password = db.Column(db.Text())
    password2 = db.Column(db.Text())
    created_at = db.Column(db.DateTime, default=datetime.now())
    update_at = db.Column(db.DateTime, onupdate=datetime.now())

    def __repr__(self):
        return f'Username: {self.name}'


class University(db.Model):
    __tablename__ = 'university'

    id = db.Column(db.Integer, primary_key=True)
    specialization = db.Enum(Specialization)
    name = db.Column(db.String(120))
    description = db.Column(db.Text())
    contact = db.Column(db.String(250))
    city = db.Enum(City)
    email = db.Column(db.String(120))
    created_at = db.Column(db.DateTime, default=datetime.now())
    update_at = db.Column(db.DateTime, onupdate=datetime.now())
    slug = db.Column(db.String(200), unique=True)

    def __repr__(self):
        return f'name: {self.name}'

    def __init__(self, name):
        self.slug = slugify(name)




