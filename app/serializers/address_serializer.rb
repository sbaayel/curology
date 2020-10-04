class AddressSerializer < ActiveModel::Serializer
  attributes :id, :street1, :street2, :city, :state, :zip
  belongs_to :magic
end
