from .db import db, environment, SCHEMA
from .user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base=declarative_base()


# ________________________________________________________________________________________________________


class DanceClassAppointment(db.Model):

    __tablename__ = "dance_class_appointments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    dance_class_id=db.Column(db.Integer, db.ForeignKey("danceclasses.id"), nullable=False)

    first_name=db.Column(db.String(100), nullable=False)
    last_name=db.Column(db.String(100), nullable=False)
    email=db.Column(db.String(100), nullable=False)
    phone_number=db.Column(db.Integer(), nullable=False)

    age= db.Column(db.Integer(), nullable=False)
    notes = db.Column(db.TEXT, nullable=False)
    is_approved = db.Column(db.Boolean, nullable=False)
    attendance = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, nullable=False, unique=False, index=False,default=datetime.now())




    user = db.relationship("User", back_populates="dance_class_appointments")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'user': self.user.to_dict() if self.user else None,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone_number': self.phone_number,
            'email':self.email,
            'dance_class_id':self.dance_class_id,
            'age':self.age,
            'notes': self.notes,
            'is_approved': self.is_approved,
            'attendance': self.attendance,
            'created_at': self.created_at,

        }


# ________________________________________________________________________________________________________


class GeneralAppointment(db.Model):

    __tablename__ = "general_appointments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    first_name=db.Column(db.String(100), nullable=False)
    last_name=db.Column(db.String(100), nullable=False)
    email=db.Column(db.String(100), nullable=False)
    phone_number=db.Column(db.String(20), nullable=False)

    type = db.Column(db.String(200), nullable=False)
    date = db.Column(db.DateTime, nullable=False, unique=False)
    location = db.Column(db.String(200), nullable=False)
    notes = db.Column(db.TEXT, nullable=False)
    isApproved = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, nullable=False,
                           unique=False, index=False, default=datetime.now())
    # media_id = db.Column(db.Integer, db.ForeignKey('media.id'))




    user = db.relationship("User", back_populates="general_appointments")
    media = db.relationship("Media", back_populates="general_appointment")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'user': self.user.to_dict() if self.user else None,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone_number': self.phone_number,
            'email':self.email,
            'type': self.type,
            'date': self.date,
            'location': self.location,
            'notes': self.notes,
            'isApproved': self.isApproved,
            'created_at': self.created_at,


        }
