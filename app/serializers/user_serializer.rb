class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :created_at, :nickname

  def created_at
    object.created_at.strftime('%B %d, %Y')
  end
end
