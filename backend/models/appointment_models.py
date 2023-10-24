from .db import db, environment, SCHEMA
from .user import User
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base=declarative_base()


# ________________________________________________________________________________________________________


class Dance_Class_Appointment(db.Model):

    __tablename__ = "dance_class_appointments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    first_name=db.Column(db.String(100), nullable=False)
    last_name=db.Column(db.String(100), nullable=False)
    email=db.Column(db.String(100), nullable=False)
    phone_number=db.Column(db.Integer(), nullable=False)
    date = db.Column(db.DateTime, nullable=False, unique=False)

    level = db.Column(db.String(100), nullable=False)
    age= db.Column(db.Integer(), nullable=False)
    accepted = db.Column(db.Boolean, nullable=False)
    attendance = db.Column(db.Boolean, nullable=False, default=False)
    created_at = db.Column(db.DateTime, nullable=False, unique=False, index=False,default=datetime.now())
    notes = db.Column(db.TEXT, nullable=False)



    user = db.relationship("User", back_populates="dance_class_appointments")
    dance_videos = db.relationship("Dance_Video", back_populates="dance_class_appointment")

    def to_dict(self):
        return {
            'id': self.id,
            # 'user_id': self.user_id,
            # 'user': self.user.to_dict() if self.user else None,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone_number': self.phone_number,
            'email':self.email,
            'level': self.level,
            'age':self.age,
            'accepted': self.accepted,
            'attendance': self.attendance,
            'created_at': self.created_at,
            'notes': self.notes

        }

    def __repr__(self):

        return f'<Dance_Class_Appointments, id={self.id}, user_id={self.user_id},level={self.level}, accepted={self.accepted}, attendance={self.attendance},created_at={self.created_at},notes={self.notes}'

# ________________________________________________________________________________________________________


class General_Appointment(db.Model):

    __tablename__ = "general_appointments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    first_name=db.Column(db.String(100), nullable=False)
    last_name=db.Column(db.String(100), nullable=False)
    email=db.Column(db.String(100), nullable=False)
    phone_number=db.Column(db.String(20), nullable=False)


    date = db.Column(db.DateTime, nullable=False, unique=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    location = db.Column(db.String(200), nullable=False)
    type = db.Column(db.String(200), nullable=False)


    created_at = db.Column(db.DateTime, nullable=False,
                           unique=False, index=False, default=datetime.now())
    accepted = db.Column(db.Boolean, nullable=False, default=False)
    notes = db.Column(db.TEXT, nullable=False)


    user = db.relationship("User", back_populates="general_appointments")
    general_media = db.relationship("General_Media", back_populates="general_appointment")

    def to_dict(self):
        return {
            'id': self.id,
            # 'user_id': self.user_id,
            # 'user': self.user.to_dict() if self.user else None,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'phone_number': self.phone_number,
            'email':self.email,
            'date': self.date,
            'start_time': self.start_time,
            'end_time': self.end_time,
            'location': self.location,
            'type': self.type,
            'accepted': self.accepted,
            'created_at': self.created_at,
            'notes': self.notes

        }

    def __repr__(self):
        return f'<General_Appointments, id={self.id},date={self.date}, accepted={self.accepted}, location={self.location}, type={self.type},start_time={self.start_time}, end_time={self.end_time},created_at={self.created_at},notes={self.notes}'
