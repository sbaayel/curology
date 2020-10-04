class MagicSerializer < ActiveModel::Serializer
  attributes :id, :firstName, :lastName, :email, :phone, :quantity, :total
  has_one :address
  has_one :payment
end
