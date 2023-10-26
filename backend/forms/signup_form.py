from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from backend.models import User


# Checking if user exists
def user_exists(form, field):
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

# Signup Form
class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), Email(), user_exists])
    first_name = StringField('first_name')
    last_name = StringField('last_name')
    address = StringField('address')
    birthdate=StringField('birthdate')
    password = StringField('password', validators=[DataRequired()])
    phone_number = StringField('phone_number')
    payment_info = StringField('payment_info')
    authorization = StringField('authorization', validators=[DataRequired()])
