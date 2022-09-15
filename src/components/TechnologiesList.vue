<script setup lang="ts">
import { ref } from "vue";
import i18n from "../i18n";

const tab = ref();

const languages = [
  "C#",
  "SQL",
  "UML",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "Java",
  "*GLSL",
  "*R",
  "*GraphQL",
  "*C++",
];
const libraries = [
  ".Net Framework",
  ".Net Core",
  "ASP .Net",
  ".Net MVC",
  ".Net Identity",
  "Entity Framework",
  "Autofac",
  "Moq",
  "NUnit",
  "Newtonsoft JSON",
  "J2EE",
  "Unity Framework",
  "Unity Analytics",
  "SignalR",
  "*OpenGL",
  "Xamarin",
  "Aspose",
  "*Tensorflow",
  "*Keras",
];
const js_css_libraries = [
  "React",
  "Redux",
  "VueJS",
  "AngularJS",
  "Angular",
  "*NodeJS",
  "Jquery",
  "Jest",
  "Mocha",
  "ESLint",
  "Prettier",
  "KnockoutJS",
  "*ThreeJS",
  "Google Materialize",
  "Bootstrap",
];
const database_technologies = [
  "SQL Server",
  "MySql",
  "DynamoDB",
  "CosmosDB",
  "Redis",
  "Microsoft SQL Server Management Studio",
  "MySql Workbench",
  "Linqpad",
  "Relational and Non-Relational",
];
const concepts = [
  "REST",
  "Web APIs",
  "SOLID",
  "DDD",
  "MVC",
  "MVVM",
  "OOP",
  "IoC",
  "LINQ",
  "JSON",
  "AJAX",
  "Microservice Development",
  "Object-Oriented Design Patterns (OOD)",
  "Unit Testing",
  "Integration Testing",
  "Pragmatic Testing",
  "TDD",
  "Database Architecture",
  "Application Architecture",
  "DevOps Architecture",
  "Unit of Work",
  "Razor Views",
  "Software Security",
  "Responsive Web Design",
  "SPA",
  "Game Development",
  "ASP Pages",
  "Shaders",
  "*Algorithmic Drawing",
  "Noise Algorithms",
  "*Machine Learning",
  "*Neural Networks (Feed-Forward, Backprop, Deep)",
  "*Decision Trees",
  "*Statistical Modeling",
  "DevOps",
  "Micro Front-Ends",
];
const devops = [
  "CI/CD",
  "Agile",
  "Terraform",
  "*Atomist",
  "Azure DevOps/VSTS",
  "Scrum",
  "Containerization",
  "Docker",
  "Feature Toggles",
  "Release Management",
  "Pull Requests/Code Reviews",
  "*SAFe",
];
const azure = [
  "Azure DevOps/VSTS",
  "Boards",
  "Pipelines",
  "Repos",
  "Artifacts",
  "CosmosDB",
  "Azure VM",
  "Azure App Services",
  "Azure Container Registry",
  "Cost Management & Billing",
  "CDN",
  "DNS",
  "Load Balancer",
  "*Service Fabric",
  "Key Vault",
  "File Storage",
  "Blob Storage",
];
const aws = [
  "ECS",
  "ECR",
  "EC2",
  "Route 53",
  "SQS",
  "SNS",
  "Lambda",
  "CloudWatch",
  "AWS CLI",
  "KMS",
  "S3",
  "CodeCommit",
  "Codebuild",
  "DynamoDB",
  "IAM",
];
const software_tools = [
  "Postman",
  "Swagger",
  "Fiddler",
  "NPM",
  "NuGet",
  "Artifactory",
  "JWT",
  "Redis",
  "SSRS",
  "IIS",
  "Unity3d",
  "Photoshop",
  "Blender",
  "FL Studio",
  "Ableton",
  "TouchDesigner",
  "MS Office",
  "Visio",
  "Splunk",
  "Okta",
  "LucidChart",
  "MS Teams",
  "Slack",
  "Notepad++",
  "Stripe",
  "EasyPost",
  "SendGrid",
  "*IBM Q",
  "JSX",
];
const source_control = [
  "Git",
  "GitHub",
  "GitHub Enterprise (GHE)",
  "Azure DevOps/VSTS",
  "AWS CodeCommit",
  "TFS",
  "SVN",
  "SourceTree",
  "VSCode Source Control",
  "Git Bash",
  "GitHub Desktop",
  "DiffMerge",
];
const project_tracking = [
  "Notion",
  "Azure DevOps Boards",
  "Rally",
  "Jira",
  "Trello",
];
const operating_systems = [
  "Windows 7-10",
  "Ubuntu",
  "WSL",
  "Kali Linux",
  "Raspbian",
  "OSX",
  "Android",
  "IOS",
];
const ides = [
  "Visual Studio",
  "VSCode",
  "PyCharm",
  "Eclipse",
  "IntelliJ",
  "Android Studio",
  "MonoDevelop",
];

const categories = [
  {
    key: "languages",
    value: i18n.global.t("software.technologies.tabs.languages"),
    chips: languages,
  },
  {
    key: "libraries",
    value: i18n.global.t("software.technologies.tabs.libraries"),
    chips: libraries,
  },
  {
    key: "js-css-libraries",
    value: i18n.global.t("software.technologies.tabs.js-css-libraries"),
    chips: js_css_libraries,
  },
  {
    key: "database-technologies",
    value: i18n.global.t("software.technologies.tabs.database-technologies"),
    chips: database_technologies,
  },
  {
    key: "concepts",
    value: i18n.global.t("software.technologies.tabs.concepts"),
    chips: concepts,
  },
  {
    key: "devops",
    value: i18n.global.t("software.technologies.tabs.devops"),
    chips: devops,
  },
  { key: "azure", value: "Azure", chips: azure },
  { key: "aws", value: "AWS", chips: aws },
  {
    key: "software-tools",
    value: i18n.global.t("software.technologies.tabs.software-tools"),
    chips: software_tools,
  },
  {
    key: "source-control",
    value: i18n.global.t("software.technologies.tabs.source-control"),
    chips: source_control,
  },
  {
    key: "project-tracking",
    value: i18n.global.t("software.technologies.tabs.project-tracking"),
    chips: project_tracking,
  },
  {
    key: "operating-systems",
    value: i18n.global.t("software.technologies.tabs.operating-systems"),
    chips: operating_systems,
  },
  {
    key: "ides",
    value: i18n.global.t("software.technologies.tabs.ides"),
    chips: ides,
  },
];
</script>

<template>
  <v-card>
    <v-card-title>
      {{ $t("software.technologies.title") }}
    </v-card-title>

    <div class="ma-16 d-lg-block d-inline">
      <v-tabs
        v-model="tab"
        background-color="transparent"
        grow
        center-active
        show-arrows
      >
        <v-tab
          v-for="category in categories"
          :key="category.key"
          :value="category.key"
          >{{ category.value }}</v-tab
        >
      </v-tabs>

      <v-window v-model="tab">
        <v-window-item
          v-for="category in categories"
          :key="category.key"
          :value="category.key"
        >
          <v-card flat>
            <v-chip
              v-for="chip in category.chips"
              :key="chip"
              class="ma-2"
              link
              >{{ chip }}</v-chip
            >
          </v-card>
        </v-window-item>
      </v-window>
    </div>
    <v-divider></v-divider>
    <p class="float-right">
      <span class="font-italic ma-4">{{
        $t("software.technologies.asterisk")
      }}</span>
    </p>
  </v-card>
</template>

<style></style>
