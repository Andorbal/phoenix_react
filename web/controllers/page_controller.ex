defmodule PhoenixReact.PageController do
  use PhoenixReact.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def app(conn, _) do
    render conn, "index.html"
  end
end
