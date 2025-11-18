import AnimatedTabs from "@/components/AnimatedTabs";
import SkillList from "@/components/skill/SkillList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = ["skills", "projects"];

export default function Home() {
  return (
    <section className="my-10 mx-5">
      <Tabs defaultValue="skills">
        <AnimatedTabs tabs={tabs} />
        <TabsContent value="skills">
          <SkillList />
        </TabsContent>
        {/* <TabsContent value="projects">
          <motion.div
            className="max-w-[300px] sm:max-w-[500px] grid gap-y-5 gap-x-2.5 mx-auto sm:grid-cols-2"
            variants={tabContentVariants}
          >
            {projects.map((item, index) => (
              <motion.div
                className="relative"
                variants={projectVariants}
                key={index}
              >
                <Badge className="absolute -top-4 -left-2 bg-yellow-500 my-1.5 hover:bg-yellow-600 z-10 dark:text-accent-foreground">
                  {item.category}
                </Badge>
                <div className="group w-full h-[185px] sm:h-[150px] relative rounded-xl overflow-hidden">
                  <Image
                    className="object-cover"
                    src={`/projects/${item.category}.jpg`}
                    fill
                    sizes="100%"
                    priority
                    alt={item.name}
                  />
                  <div
                    className="w-full h-full flex flex-col justify-end absolute -bottom-full left-0 text-secondary p-2.5 transition-all duration-300 ease-in-out group-hover:bottom-0 dark:text-secondary-foreground"
                    style={{
                      background:
                        "linear-gradient(180deg, hsla(207, 25%, 50%, 0.25) 0%, hsla(207, 25%, 5%, 1) 100%)",
                    }}
                  >
                    <h3 className="h3">{item.name}</h3>
                    <div className="flex items-center gap-1.5">
                      <a href={item.demo} target="_blank">
                        <Button
                          className="w-fit h-fit p-1.5 rounded-full dark:text-secondary-foreground"
                          type="button"
                          size="icon"
                        >
                          <RiLinksLine size={17.5} />
                        </Button>
                      </a>
                      <a href={item.github} target="_blank">
                        <Button
                          className="w-fit h-fit p-1.5 rounded-full dark:text-secondary-foreground"
                          type="button"
                          size="icon"
                        >
                          <RiGithubLine size={17.5} />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </TabsContent> */}
      </Tabs>
    </section>
  );
}
