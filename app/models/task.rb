class Task < ApplicationRecord
  has_one :item, as: :listable, dependent: :destroy
end
