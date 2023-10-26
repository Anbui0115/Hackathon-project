from flask_wtf import FlaskForm
from ..models import db, User, DanceClassAppointment
from wtforms import StringField, SubmitField, IntegerField, BooleanField, SelectField, TextAreaField
from wtforms.validators import DataRequired

from flask_login import current_user, login_user, logout_user, login_required



class CreateDanceClassAppointmentForm(FlaskForm):

    level = SelectField("level", choices=["Beginner","Intermediate","Advanced","Senior"], validators=[DataRequired()])

    age=IntegerField("age", validators=[DataRequired()] )

    location=StringField("location", validators=[DataRequired()])

    isApproved= BooleanField(default=False)

    attendance = BooleanField(default=False)

    notes = TextAreaField("notes", validators=[DataRequired()])

    submit = SubmitField("Send Enquiry")


    # first_name = StringField("first_name", validators=[DataRequired()])

    # last_name = StringField("last_name", validators=[DataRequired()])

    # email =  StringField("email", validators=[DataRequired()])

    # age= IntegerField("age", validators=[DataRequired()])

    # phone_number = IntegerField("phone_number", validators=[DataRequired()])

    # date = DateField('date',validators=[DataRequired()])
