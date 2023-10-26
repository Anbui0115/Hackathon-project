from .db import db, environment, SCHEMA
from .appointment_models import DanceClassAppointment
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base=declarative_base()

# ________________________________________________________________________________________________________



class Media(db.Model):

    __tablename__ = 'media'

    id = db.Column(db.Integer, primary_key = True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    video_url = db.Column(db.String(200), nullable = True)
    photo_url = db.Column(db.String(200), nullable = True)
    description = db.Column(db.String(1000), nullable=True)
    created_at = db.Column(db.DateTime, nullable=False, unique=False, index=False,default=datetime.now())
    authorization = db.Column(db.String(1000), default='Public', nullable=False)

    #relationship
    media = db.relationship("User", back_populates="media")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'video_url':self.video_url,
            'photo_url': self.photo_url,
            'description': self.description,
            'created_at':self.created_at,
            'authorization': self.authorization
        }


# ________________________________________________________________________________________________________
