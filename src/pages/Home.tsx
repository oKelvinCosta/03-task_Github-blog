import Img from "../Img";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { CardAction } from "../components/ui/card";
import { Building, Github, SquareArrowOutUpRight, Users } from "lucide-react";

import Logo from "../assets/Logo.png";

export default function Home() {
  return (
    <>
      <header>
        <div className={`flex flex-col items-center  min-h-[290px] bg-[url(./bg-header.webp)] bg-cover bg-center`}>
          <Img src={Logo} className={`w-full max-w-[140px] mt-20`} />
        </div>
        <div className="container -mt-18">
          <Card className="flex items-center">
            <Img src={`./imgs/core/placeholder.png`} className={``} />
            <div className="flex flex-col gap-4">
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Kelvin</CardTitle>
                <CardAction>
                  <a href="" className="flex items-center gap-2">
                    GITHUB <SquareArrowOutUpRight size={16} color="#3294f8" />
                  </a>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>
                  Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean
                  malesuada suscipit. Nunc, volutpat pulvinar vel mass.
                </p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center gap-6">
                  <a href="https://github.com/cameronwll" className="flex items-center gap-2">
                    <Github size={16} color="#3a526b" />
                    cameronwll
                  </a>
                  <a href="https://github.com/cameronwll" className="flex items-center gap-2">
                    <Building size={16} color="#3a526b" />
                    Rocketseat
                  </a>
                  <a href="https://github.com/cameronwll" className="flex items-center gap-2">
                    <Users size={16} color="#3a526b" />
                    32 seguidores
                  </a>
                </div>
              </CardFooter>
            </div>
          </Card>
        </div>
      </header>

      <div className="container">
        <div className="flex gap-6">
          <div className="flex items-center justify-between">
            <h3>Publicações</h3>
            <span>6 publicações</span>
          </div>
          <div>FORM</div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Card key={index} className="flex items-center">
              <div>
                <CardHeader className="flex items-center justify-between mb-6">
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
          ))}
        </div>
      </div>
    </>
  );
}
