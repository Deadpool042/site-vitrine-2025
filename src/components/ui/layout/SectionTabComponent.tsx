import { SingleSection } from "@/datas/data";
import SectionWrapper from "./SectionWrapper";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";

interface SectionTabComponentProps {
  data: SingleSection[];
}

function SectionTabComponent({ data }: SectionTabComponentProps) {
  const [activeTab, setActiveTab] = useState("0-0"); // Valeur initiale basée sur les index

  return (
    <SectionWrapper>
      {data.map((section, sectionIndex) => (
        <div
          key={sectionIndex}
          className="space-y-6">
          {section.title && section.variant === "default" && (
            <h3 className="text-primary-color">{section.title}</h3>
          )}
          {section.subtitle && section.variant === "default" && (
            <p className="mt-2">{section.subtitle}</p>
          )}
          {section.text && section.variant === "alternative" && (
            <h3 className="text-center">{section.text}</h3>
          )}
          {/* Version Mobile - Tabs en mode accordéon */}
          <div className="block md:hidden">
            <Tabs.Root
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full">
              <Tabs.List className="flex flex-col w-full gap-2">
                {section.tabs &&
                  section.tabs.map((tab, tabIndex) => {
                    const tabValue = `${sectionIndex}-${tabIndex}`;
                    return (
                      <div key={tabValue}>
                        <Tabs.Trigger
                          value={tabValue}
                          className="w-full p-4 text-lg uppercase bg-slate-100 rounded-md data-[state=active]:bg-primary-color data-[state=active]:text-white hover:shadow-inner-strong data-[state=active]:shadow-inner-strong text-black hover:bg-primary-color text-left transition-all duration-300 ease-in-out font-semibold">
                          {tab.title}
                        </Tabs.Trigger>
                        <Tabs.Content
                          value={tabValue}
                          className="p-4 mt-2 text-grey-text ">
                          {tab.text}
                        </Tabs.Content>
                      </div>
                    );
                  })}
              </Tabs.List>
            </Tabs.Root>
          </div>

          {/* Version Desktop - Affichage classique */}
          <div className="hidden md:block">
            <Tabs.Root
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full">
              <div className="flex flex-col md:flex-row">
                {/* Liste des tabs - Colonne gauche */}
                <Tabs.List className="flex flex-col w-full gap-2 md:w-1/3">
                  {section.tabs &&
                    section.tabs.map((tab, tabIndex) => {
                      const tabValue = `${sectionIndex}-${tabIndex}`;
                      return (
                        <Tabs.Trigger
                          key={tabValue}
                          value={tabValue}
                          className="w-full p-4 text-lg uppercase bg-slate-100 rounded-md data-[state=active]:bg-primary-color data-[state=active]:text-white hover:shadow-inner-strong data-[state=active]:shadow-inner-strong text-black hover:bg-primary-color text-left transition-all duration-300 ease-in-out font-semibold">
                          {tab.title}
                        </Tabs.Trigger>
                      );
                    })}
                </Tabs.List>

                {/* Contenu des tabs - Colonne droite */}
                <div className="w-full p-6 border-l border-gray-700 md:w-2/3">
                  {section.tabs &&
                    section.tabs.map((tab, tabIndex) => {
                      const tabValue = `${sectionIndex}-${tabIndex}`;
                      return (
                        <Tabs.Content
                          key={tabValue}
                          value={tabValue}
                          className="space-y-4">
                          {tab.subtitle && <p>{tab.subtitle}</p>}
                          {tab.text && (
                            <div className="mt-2 space-y-2">{tab.text}</div>
                          )}
                        </Tabs.Content>
                      );
                    })}
                </div>
              </div>
            </Tabs.Root>
          </div>
          <div>{section.button && section.button}</div>
        </div>
      ))}
    </SectionWrapper>
  );
}

export default SectionTabComponent;
