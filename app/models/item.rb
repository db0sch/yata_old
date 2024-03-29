class Item < ApplicationRecord
  belongs_to :user
  acts_as_list scope: [:date, :user_id]

  scope :undone, -> { where(done: false) }
  scope :past, -> { where('date <= ?', Date.yesterday) }
  scope :of, ->(date) { where(date: date).order(position: :asc) }
  scope :today, -> { of(Date.current) }
  scope :tomorrow, -> { of(Date.tomorrow) }
  scope :tasks, -> { where(kind: "Task") }

end
