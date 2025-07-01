import Img from "../components/Img";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { CardAction } from "../components/ui/card";
import { Building, Github, SquareArrowOutUpRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useState } from "react";
import SearchForm from "@/components/SearchForm";
import { fetchIssues, fetchProfile } from "@/lib/github";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { limitWords } from "@/lib/utils";
import { Link } from "react-router-dom";

interface IssuesProps {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export default function Home() {
  const [issues, setIssues] = useState<IssuesProps[]>([]);
  const [profile, setProfile] = useState<any>([]);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);
  const [isLoadingIssues, setIsLoadingIssues] = useState(true);

  async function loadFirstTimeIssues() {
    try {
      setIsLoadingIssues(true);
      const issues = await fetchIssues();
      setIssues(issues);
    } catch (error) {
      console.error("Erro ao buscar issues:", error);
    } finally {
      setIsLoadingIssues(false);
    }
  }

  async function loadFirstTimeProfile() {
    try {
      setIsLoadingProfile(true);
      const profile = await fetchProfile("oKelvinCosta");
      setProfile(profile);
    } catch (error) {
      console.error("Erro ao buscar profile:", error);
    } finally {
      setIsLoadingProfile(false);
    }
  }

  useEffect(() => {
    loadFirstTimeIssues();
    loadFirstTimeProfile();
  }, []);

  if (isLoadingProfile || isLoadingIssues) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center text-center">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <>
      {/* Card Header */}
      <div className="container -mt-18">
        <header className="">
          <Card className="flex items-center p-6 md:flex-row">
            <Img
              src={profile.avatar_url}
              className={`aspect-[1/1] max-w-[200px] rounded-sm`}
            />
            <div className="flex w-full flex-col gap-4">
              <CardHeader className="flex items-center justify-between p-0">
                <CardTitle>
                  <h1 className="!mb-0">{profile.name}</h1>
                </CardTitle>
                <CardAction>
                  <Button variant="outline" className="text-primary">
                    <a
                      href={profile.html_url}
                      className="flex items-center gap-2"
                    >
                      GITHUB <SquareArrowOutUpRight size={16} color="#3294f8" />
                    </a>
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent className="p-0">
                <p>{profile.bio}</p>
              </CardContent>
              <CardFooter className="p-0">
                <div className="flex items-center gap-6">
                  <a
                    href={profile.html_url}
                    className="flex items-center gap-2"
                  >
                    <Github size={16} color="#3a526b" />
                    oKelvinCosta
                  </a>
                  <span className="flex items-center gap-2">
                    <Building size={16} color="#3a526b" />
                    {profile.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <Users size={16} color="#3a526b" />
                    {profile.followers} seguidores
                  </span>
                </div>
              </CardFooter>
            </div>
          </Card>
        </header>
      </div>

      <div className="container">
        {/* Area de Formulário */}
        <div className="flex flex-col py-10">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="!mb-0">Publicações</h3>
            <span>{issues.length} publicações</span>
          </div>
          <div>
            <SearchForm setIssues={setIssues} />
          </div>
        </div>

        {/* Area de Cards */}
        <div className="grid grid-cols-2 gap-6">
          {issues.map((issue) => (
            <Link to={`/post/${issue.number}`} key={issue.id}>
              <Card className="flex items-center">
                <div>
                  <CardHeader className="flex items-center justify-between">
                    <CardTitle>
                      <h2>{issue.title}</h2>
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p>
                      {formatDistanceToNow(new Date(issue.created_at), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </p>
                    <p>{limitWords(issue.body, 40)}</p>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
