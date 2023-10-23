from flask import Blueprint, request, jsonify
from ..models.general_media import General_Media, User, db

general_media_routes = Blueprint('general_media', __name__)



# Create a new General Media
@general_media_routes.route('/create', methods=['POST'])
def create_general_media():
    data = request.get_json()
    new_general_media = General_Media(
        general_appointment_id=data['general_appointment_id'],
        video_url=data['video_url'],
        photo_url=data['photo_url'],
        description=data['description']
    )
    db.session.add(new_general_media)
    db.session.commit()
    return jsonify(new_general_media.to_dict())



# Get General Media by ID
@general_media_routes.route('/<int:id>')
def get_general_media(id):
    general_media = General_Media.query.get(id)
    if general_media:
        return jsonify(general_media.to_dict())
    return jsonify({'message': 'General Media not found'}), 404



# Update General Media by ID
@general_media_routes.route('/<int:id>', methods=['PUT'])
def update_general_media(id):
    general_media = General_Media.query.get(id)
    if not general_media:
        return jsonify({'message': 'General Media not found'}), 404

    data = request.get_json()
    general_media.general_appointment_id = data.get('general_appointment_id', general_media.general_appointment_id)
    general_media.video_url = data.get('video_url', general_media.video_url)
    general_media.photo_url = data.get('photo_url', general_media.photo_url)
    general_media.description = data.get('description', general_media.description)
    db.session.commit()
    return jsonify(general_media.to_dict())



# Delete General Media by ID
@general_media_routes.route('/<int:id>', methods=['DELETE'])
def delete_general_media(id):
    general_media = General_Media.query.get(id)
    if general_media:
        db.session.delete(general_media)
        db.session.commit()
        return jsonify({'message': 'General Media deleted'})
    return jsonify({'message': 'General Media not found'}), 404
