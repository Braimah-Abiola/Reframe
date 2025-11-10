import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion-services"
import { services } from "@/constants"
import { NavListItem } from "./nav-list-item-mobile"

interface ServicesAccordionProps {
    onItemClick?: () => void;
}

export function ServicesAccordion({ onItemClick }: ServicesAccordionProps) {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>Services</AccordionTrigger>
                <AccordionContent className="flex flex-col text-balance pt-2">
                    <ul className="grid grid-cols-1 gap-2 w-full">
                        {services.map((service) => (
                            <div key={service.title} onClick={onItemClick}>
                                <NavListItem
                                    title={service.title}
                                    href={service.href}
                                    icon={service.icon}
                                >
                                    {service.description}
                                </NavListItem>
                            </div>
                        ))}
                    </ul>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
