from .db import db, environment, SCHEMA
from .user import User
# from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

class Media(db.Model):
  __tablename__ = 'media'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  photo_url = db.Column(db.String(255), nullable=True)
  video_url = db.Column(db.String(255), nullable=True)
  description = db.Column(db.String(255), nullable=True)
  created_at = db.Column(db.DateTime, default=datetime.utcnow)
  authorization = db.Column(db.String(1000), default='Public', nullable=False)
  type = db.Column(db.String(100), default='Dance School Pictures', nullable=False)


  # relationship
  user = db.relationship('User', back_populates='media')
  general_appointment = db.relationship("GeneralAppointment", back_populates="media")

  def to_dict(self):
    return {
      'id': self.id,
      'user_id': self.user_id,
      'photo_url': self.photo_url,
      'video_url': self.video_url,
      'description': self.description,
      'authorization':self.authorization,
      'type': self.type,
      'created_at': self.created_at,
    }
