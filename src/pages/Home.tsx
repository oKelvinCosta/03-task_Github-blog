import Img from "../Img";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { CardAction } from "../components/ui/card";
import { Building, Github, SquareArrowOutUpRight, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <header>
        <div className="flex items-center justify-center">
          <Img src={`./imgs/core/placeholder.png`} className={``} />
        </div>
        <Card className="flex items-center">
          <Img src={`./imgs/core/placeholder.png`} className={``} />
          <div>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>Kelvin</CardTitle>
              <CardAction>
                GITHUB <SquareArrowOutUpRight size={16} color="#3294f8" />
              </CardAction>
            </CardHeader>
            <CardContent>
              <p>
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean
                malesuada suscipit. Nunc, volutpat pulvinar vel mass.
              </p>
              <div className="flex items-center gap-6">
                <a href="https://github.com/cameronwll">
                  <Github size={16} color="#3a526b" />
                  cameronwll
                </a>
                <a href="https://github.com/cameronwll">
                  <Building size={16} color="#3a526b" />
                  Rocketseat
                </a>
                <a href="https://github.com/cameronwll">
                  <Users size={16} color="#3a526b" />
                  32 seguidores
                </a>
              </div>
            </CardContent>
          </div>
        </Card>
      </header>

      <div className="flex gap-6">
        <div className="flex items-center justify-between">
          <h3>Publicações</h3>
          <span>6 publicações</span>
        </div>
        <div>FORM</div>
      </div>

      <div className="flex gap-6">
        <Card className="flex items-center">
          <Img src={`./imgs/core/placeholder.png`} className={``} />
          <div>
            <CardHeader className="flex items-center justify-between">
              <CardTitle>JavaScript data types and data structures</CardTitle>
              <span>Há 1 dia</span>
            </CardHeader>
            <CardContent>
              <p>
                Programming languages all have built-in data structures, but these often differ from one language to
                another. This article attempts to list the built-in data structures available in JavaScript and what
                properties they have.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </>
  );
}
