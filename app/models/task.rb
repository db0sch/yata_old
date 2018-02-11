class Task < ApplicationRecord
  has_one :item, as: :listable, dependent: :destroy
  accepts_nested_attributes_for :item
end
