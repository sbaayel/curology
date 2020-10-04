class Magic < ApplicationRecord
  has_one :address
  has_one :payment
end
