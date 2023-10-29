from flask import Blueprint, request, jsonify
from ..models import Media, User, db
from flask_login import current_user, login_user, logout_user, login_required


# _______________________________________________________________________________


media_routes = Blueprint('media_bp', __name__)

# _______________________________________________________________________________
#  Get all Media -- WORKS

@media_routes.route("/", methods=["GET"])
def get_all_media():
    all_media = Media.query.all()
    response = []

    if all_media:
        for media in all_media:
            media_obj = media.to_dict()
            response.append(media_obj)
        print("THIS IS MEDIA FROM BACKEND", response)
        return {
            "media": response
        }, 200
    return {"Error": "Media Not Found"}, 404

# _______________________________________________________________________________

# Create a New Media --- WORKS


@media_routes.route('/create', methods=['POST'])
@login_required
def create_media():
    data = request.get_json()

    # print("current user is: **********************************", current_user)


    new_media = Media(
        user_id=current_user.id,
        video_url=data['video_url'],
        photo_url=data['photo_url'],
        description=data['description'],
        authorization=data['authorization']
    )
    db.session.add(new_media)
    db.session.commit()
    return jsonify(new_media.to_dict())



# _______________________________________________________________________________


# Get General Media by ID -- WORKS


@media_routes.route('/<int:id>', methods=['GET'])
def get_media(id):
    media = Media.query.get(id)
    if media:
        return jsonify(media.to_dict())
    return jsonify({'message': 'Media not found'}), 404

# _______________________________________________________________________________

# Update General Media by ID -- WORKS


@media_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_media(id):
    media =Media.query.get(id)
    if not media:
        return jsonify({'message': 'Media not found'}), 404

    data = request.get_json()

    media.video_url = data.get('video_url', media.video_url)
    media.photo_url = data.get('photo_url', media.photo_url)
    media.description = data.get('description', media.description)
    media.authorization = data.get('authorization', media.authorization)

    db.session.commit()
    return jsonify(media.to_dict())




# _______________________________________________________________________________


# Delete General Media by ID -- WORKS


@media_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_media(id):
    media = Media.query.get(id)
    if media:
        db.session.delete(media)
        db.session.commit()
        return jsonify({'message': 'Media deleted'})
    return jsonify({'message': 'Media not found'}), 404



# _______________________________________________________________________________
