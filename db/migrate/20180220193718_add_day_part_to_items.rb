class AddDayPartToItems < ActiveRecord::Migration[5.1]
  def change
    add_column :items, :day_part, :integer, default: 0
  end
end
