class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :ccNum, :exp
  belongs_to :magic
end
