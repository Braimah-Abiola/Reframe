import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Separator } from "../ui/separator"

const results = [
    {
        metric: "Monthly Website Visitors",
        before: "~1.4k visitors/mo",
        after: "~3.8k visitors/mo",
        improvement: "+171%",
    },
    {
        metric: "Leads Generated",
        before: "~360",
        after: "~980",
        improvement: "+172%",
    },
    {
        metric: "Subscription Conversion Rate",
        before: "1.9%",
        after: "5.4%",
        improvement: "+184%",
    },
]

export function BusinessImpactTable() {
    return (
        <section className=" w-full relative py-12 md:py-20">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>
            <div className=" max-w-6xl mx-auto px-4 md:px-0">
                <h3 className=" text-2xl md:text-4xl font-semibold font-montserrat tracking-tighter mb-2">
                    Business Impact Achievements
                </h3>

                <div className=" border mt-6 rounded-lg md:rounded-xl">
                    <Table className="border rounded-lg md:rounded-xl overflow-clip">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Metric</TableHead>
                                <TableHead>Before</TableHead>
                                <TableHead>After</TableHead>
                                <TableHead>Improvement</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {results.map((result) => (
                                <TableRow key={result.metric}>
                                    <TableCell className=" text-sm md:text-base font-medium ">{result.metric}</TableCell>
                                    <TableCell className=" bg-white">{result.before}</TableCell>
                                    <TableCell className=" bg-white">{result.after}</TableCell>
                                    <TableCell className=" bg-white">{result.improvement}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

        </section>
    )
}
