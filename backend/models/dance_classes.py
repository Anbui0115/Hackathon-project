from .db import db, environment, SCHEMA
from .user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base=declarative_base()


# ________________________________________________________________________________________________________


class Dance_Class(db.Model):

    __tablename__ = "dance_classes"

    id = db.Column(db.Integer, primary_key=True)
    start_time=db.Column(db.String(100), nullable=False)
    end_time=db.Column(db.String(100), nullable=False)
    level=db.Column(db.String(255), nullable=False)
    description = db.Column(db.TEXT, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, unique=False, index=False,default=datetime.now())


    dance_videos = db.relationship("Dance_Video", back_populates="dance_class")

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
