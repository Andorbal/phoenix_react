defmodule PhoenixReact.RepoView do
  use PhoenixReact.Web, :view

  def render("index.json", %{repos: repos}) do
    repos
  end
end
