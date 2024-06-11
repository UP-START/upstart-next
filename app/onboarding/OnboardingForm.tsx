"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Megaphone,
  Bird,
  Wrench,
  Search,
  Settings,
  Briefcase,
  BarChart,
  Monitor,
  Paintbrush,
  Box,
} from "lucide-react";

// Schema for the form validation
const formSchema = z.object({
  firstName: z.string().min(1, "Primeiro Nome é obrigatório"),
  lastName: z.string().min(1, "Sobrenome é obrigatório"),
  roles: z.array(
    z.enum([
      "Idea Guy",
      "Communicator",
      "Peacemaker",
      "Problem Solver",
      "Problem Finder",
      "Executor",
    ])
  ).min(1, "Selecione pelo menos uma persona"),
  expertise: z.enum([
    "Business",
    "Marketing",
    "Tech",
    "Design",
    "Other",
  ]),
  otherExpertise: z.string().optional(),
  interests: z.array(z.string()).min(1, "Selecione pelo menos um interesse."),
});

type FormData = z.infer<typeof formSchema>;

const interestOptions = [
  "Web3",
  "Artificial Intelligence",
  "Blockchain",
  "Cybersecurity",
  "Fintech",
  "Healthcare",
  "E-commerce",
  "Education",
  "Green Tech",
  "IoT",
  "VR/AR",
  "Robotics",
  "Gaming",
  "Data Science",
  "Social Media",
  "Cloud Computing",
];

const OnboardingForm: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      roles: [],
      expertise: "Business",
      otherExpertise: "",
      interests: [],
    },
  });

  const handleRoleSelect = (role: string) => {
    const currentRoles = form.getValues("roles");
    if (currentRoles.includes(role)) {
      form.setValue("roles", currentRoles.filter(r => r !== role));
    } else {
      form.setValue("roles", [...currentRoles, role]);
    }
  };

  const handleInterestSelect = (interest: string) => {
    const currentInterests = form.getValues("interests");
    if (currentInterests.includes(interest)) {
      form.setValue("interests", currentInterests.filter(i => i !== interest));
    } else {
      form.setValue("interests", [...currentInterests, interest]);
    }
  };

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Finalize o formulário ou prossiga para a próxima etapa
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
        {/* Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Primeiro Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu primeiro nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sobrenome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu sobrenome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Role Selection */}
        <FormLabel className="mt-8">Selecione o papel que mais ressoa com você:</FormLabel>
        <div className="flex flex-wrap gap-2">
          {[
            { role: "Idea Guy", icon: Lightbulb },
            { role: "Communicator", icon: Megaphone },
            { role: "Peacemaker", icon: Bird },
            { role: "Problem Solver", icon: Wrench },
            { role: "Problem Finder", icon: Search },
            { role: "Executor", icon: Settings },
          ].map(({ role, icon: Icon }) => (
            <Button
              key={role}
              type="button"
              variant={form.watch("roles").includes(role) ? "default" : "outline"}
              onClick={() => handleRoleSelect(role)}
              className="p-4 h-28 w-28 flex flex-col items-center justify-center"
            >
              <Icon className="w-6 h-6 mb-2" />
              {role}
            </Button>
          ))}
        </div>
        <FormMessage />

        {/* Expertise Selection */}
        <FormLabel className="mt-8">Escolha sua área principal de expertise ou interesse:</FormLabel>
        <div className="flex flex-wrap gap-2">
          {[
            { expertise: "Business", icon: Briefcase },
            { expertise: "Marketing", icon: BarChart },
            { expertise: "Tech", icon: Monitor },
            { expertise: "Design", icon: Paintbrush },
            { expertise: "Other", icon: Box },
          ].map(({ expertise, icon: Icon }) => (
            <Button
              key={expertise}
              type="button"
              variant={form.watch("expertise") === expertise ? "default" : "outline"}
              onClick={() => form.setValue("expertise", expertise)}
              className="p-4 h-28 w-28 flex flex-col items-center justify-center"
            >
              <Icon className="w-6 h-6 mb-2" />
              {expertise}
            </Button>
          ))}
        </div>
        <FormMessage />
        {form.watch("expertise") === "Other" && (
          <FormField
            control={form.control}
            name="otherExpertise"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Qual é a sua expertise?</FormLabel>
                <FormControl>
                  <Input placeholder="Sua expertise" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Interests */}
        <FormLabel className="mt-8">Selecione seus interesses:</FormLabel>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((interest) => (
            <Button
              key={interest}
              type="button"
              variant={form.watch("interests").includes(interest) ? "default" : "outline"}
              onClick={() => handleInterestSelect(interest)}
              className="p-2"
            >
              {interest}
            </Button>
          ))}
        </div>
        <FormMessage />

        <Button type="submit" className="w-full mt-8">Enviar</Button>
      </form>
    </Form>
  );
};

export default OnboardingForm;
