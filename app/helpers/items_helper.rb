module ItemsHelper
  def display_date_header(date)
    case date
    when Date.current then "Today"
    when Date.tomorrow then "Tomorrow"
    else
      "Pending"
    end
  end

  def undone_count(date)
    Task.undone.of(date).count
  end

end
