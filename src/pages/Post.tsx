import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { CardAction } from "../components/ui/card";
import {
  CalendarClock,
  ChevronLeft,
  Github,
  MessageSquareMore,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchIssueByNumber } from "@/lib/github";
import { useState } from "react";
import "github-markdown-css/github-markdown.css";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { format } from "date-fns";

export default function Post() {
  const [issuePost, setIssuePost] = useState<any>(null);
  const params = useParams<{ number: string }>();
  const number = Number(params.number);
  const [isLoading, setIsLoading] = useState(true);

  async function loadIssueByNumber(number: number) {
    try {
      setIsLoading(true);
      const issue = await fetchIssueByNumber(number);
      setIssuePost(issue);
    } catch (error) {
      console.error("Erro ao carregar a issue:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadIssueByNumber(number);
  }, [number]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center text-center">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container -mt-18">
        <header>
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <Link to="/">
                <Button
                  variant="outline"
                  className="text-primary flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={16} color="#3294f8" />
                  <span className="mt-[2px]">VOLTAR</span>
                </Button>
              </Link>
              <CardAction>
                <a href={issuePost.html_url}>
                  <Button
                    variant="outline"
                    className="text-primary flex items-center justify-center gap-2"
                  >
                    <span className="mt-[2px]">VER NO GITHUB</span>
                    <SquareArrowOutUpRight size={16} color="#3294f8" />
                  </Button>
                </a>
              </CardAction>
            </div>
            <CardHeader className="flex items-center justify-between p-0">
              <CardTitle>
                <h1 className="!mb-0">{issuePost.title}</h1>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="flex items-center gap-6">
                <a
                  href={issuePost.user.html_url}
                  className="flex items-center gap-2"
                >
                  <Github size={16} color="#3a526b" />
                  {issuePost.user.login}
                </a>
                <span className="flex items-center gap-2">
                  <CalendarClock size={16} color="#3a526b" />
                  {format(new Date(issuePost.created_at), "dd/MM/yyyy")}
                </span>
                <span className="flex items-center gap-2">
                  <MessageSquareMore size={16} color="#3a526b" />
                  {issuePost.user.followers} seguidores
                </span>
              </div>
            </CardContent>
          </Card>
        </header>

        {/* Content */}
        <div className="markdown-body !mt-10 rounded-md border p-10">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {issuePost.body}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
