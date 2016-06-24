defmodule PhoenixReact.RepoController do
  use PhoenixReact.Web, :controller
  #import PhoenixReact.Repo

  def index(conn, _) do
    repos = Repo.all from r in "repos",
      select: %{id: r.id, author: r.author, name: r.name}

    json conn, repos
  end

  def create(conn, %{"author" => author, "name" => name}) do
    {_count, [%{id: id}]} = Repo.insert_all "repos", [[author: author, name: name]], returning: [:id]

    json conn, %{repo_id: id}
  end
end
