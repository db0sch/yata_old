class RemoveReferenceFromItems < ActiveRecord::Migration[5.1]
  def change
    remove_reference :items, :listable, polymorphic: true
  end
end
