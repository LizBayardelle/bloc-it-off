class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :created_at, :username

  def full_name
    object.full_name
  end

  def created_at
    object.created_at.strftime('%B %d, %Y')
  end
end
