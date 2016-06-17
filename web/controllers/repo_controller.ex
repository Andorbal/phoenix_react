defmodule PhoenixReact.RepoController do
  use PhoenixReact.Web, :controller

  def index(conn, _) do
    render conn, repos: [
      %{author: "foo", repo: "stuff"},
      %{author: "foo", repo: "things"},
      %{author: "bob", repo: "claw"},
      %{author: "chancy", repo: "clew"}
    ]
  end

  def create(conn, _) do
    json conn, %{repos: [%{author: "a", repo: "b"}]}
  end
end
