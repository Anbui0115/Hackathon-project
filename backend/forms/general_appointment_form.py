from flask_wtf import FlaskForm
from ..models import db, User, GeneralAppointment
from wtforms import StringField, SelectMultipleField, SubmitField, IntegerField, TimeField, FloatField, DateField, SelectField, TextAreaField
from wtforms.validators import DataRequired, ValidationError, Email
from flask_login import current_user, login_user, logout_user, login_required



class CreateGeneralAppointmentForm(FlaskForm):


    # first_name = StringField("first_name", validators=[DataRequired()])

    # last_name = StringField("last_name", validators=[DataRequired()])

    # email =  StringField("email", validators=[DataRequired()])

    # phone_number = StringField("phone_number", validators=[DataRequired()])

    type = SelectField("type", choices=["Makeup", "Emceeing/Hosting", "Other"], validators=[DataRequired()])

    date = DateField("date", validators=[DataRequired()])


    start_time = TimeField('Start at',validators=[DataRequired()])

    end_time = TimeField('End at', validators=[DataRequired()])

    location = StringField("location", validators=[DataRequired()])

    # Specific details of the event: What kind of event is it? Duration that yourequire services for?
    notes = TextAreaField("notes", validators=[DataRequired()])

    submit = SubmitField("Send Enquiry")
