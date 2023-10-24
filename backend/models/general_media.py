from .db import db, environment, SCHEMA
from .appointment_models import GeneralAppointment
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

Base=declarative_base()

# ________________________________________________________________________________________________________



class General_Media(db.Model):

    __tablename__ = 'general_media'

    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    general_appointment_id = db.Column(db.Integer, db.ForeignKey("general_appointments.id"), nullable=False)
    video_url = db.Column(db.String(200), nullable = True)
    photo_url = db.Column(db.String(200), nullable = True)
    description = db.Column(db.String(1000), nullable=True)


    #relationship
    general_appointment = db.relationship("General_Appointment", back_populates="general_media")


    def to_dict(self):
        return {
            'id': self.id,
            'general_appointment_id': self.general_appointment_id,
            'video_url':self.video_url,
            'photo_url': self.photo_url,
            'description': self.description
        }

    def __repr__(self):
        return f'<General_Media, id={self.id}, general_appointment_id={self.general_appointment_id},video_url={self.video_url}, photo_url={self.photo_url}, description={self.description}'

# ________________________________________________________________________________________________________
