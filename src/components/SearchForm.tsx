import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { fetchIssues } from "@/lib/github";

// Search form is better not validate
const formSchema = z.object({
  query: z.string(),
});

type formSchemaInputs = z.infer<typeof formSchema>;

interface IssuesProps {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
}

// Necessary to set issues and pass to Home
interface SearchFormProps {
  setIssues: (issues: IssuesProps[]) => void;
}

export default function SearchForm({ setIssues }: SearchFormProps) {
  const formSearch = useForm<formSchemaInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });
  const { control, register, handleSubmit, reset } = formSearch;

  async function handleSearchSubmit(data: formSchemaInputs) {
    const filteredIssues = await fetchIssues(data.query);
    setIssues(filteredIssues);
    reset();
  }

  return (
    <Form {...formSearch}>
      <form onSubmit={handleSubmit(handleSearchSubmit)} className="space-y-8">
        <div className="flex gap-2">
          <FormField
            control={control}
            {...register("query")}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input placeholder="Buscar conteúdo" {...field} />
                </FormControl>

                <FormMessage className="w-full text-left" />
              </FormItem>
            )}
          />
          <Button type="submit">
            <Search strokeWidth={2.5} />
          </Button>
        </div>
      </form>
    </Form>
  );
}
