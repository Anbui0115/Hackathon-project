from flask_wtf import FlaskForm
# from ..models import db, User
from wtforms import StringField, SubmitField, IntegerField, DateField, FloatField, SelectField
from wtforms.validators import DataRequired, ValidationError
from flask_login import current_user, login_user, logout_user, login_required



class CreateTestimonialForm(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired()])
    last_name = StringField('last_name', validators=[DataRequired()])
    content = StringField('content', validators=[DataRequired()])
