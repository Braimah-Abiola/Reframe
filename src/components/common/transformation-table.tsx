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
        metric: "Page Load Score",
        before: "42/100",
        after: "95/100",
        improvement: "+126%",
    },
    {
        metric: "Mobile Performance Score",
        before: "44/100",
        after: "97/100",
        improvement: "+120%",
    },
    {
        metric: "SEO Score",
        before: "66/100",
        after: "96/100",
        improvement: "+45%",
    },
    {
        metric: "Accessibility Score",
        before: "76/100",
        after: "100/100",
        improvement: "+32%",
    },
    {
        metric: "Best Practices Score",
        before: "78/100",
        after: "100/100",
        improvement: "+28%",
    },
    {
        metric: "Core Web Vitals - LCP",
        before: "5.6 seconds",
        after: "1.9 seconds",
        improvement: "3× faster",
    },
    {
        metric: "Core Web Vitals - FID",
        before: "310ms",
        after: "65ms",
        improvement: "79% improvement",
    },
    {
        metric: "Core Web Vitals - CLS",
        before: "0.28",
        after: "0.07",
        improvement: "75% improvement",
    },
    {
        metric: "Bounce Rate",
        before: "64%",
        after: "39%",
        improvement: "39% reduction",
    },
    {
        metric: "Average Session Duration",
        before: "1:18 minutes",
        after: "2:52 minutes",
        improvement: "+119%",
    },
    {
        metric: "Organic Traffic Growth",
        before: "Baseline",
        after: "+172% in 6 months",
        improvement: "+172%",
    },
    {
        metric: "Conversion Rate",
        before: "1.9%",
        after: "5.4%",
        improvement: "+184%",
    },
    {
        metric: "User Engagement Score",
        before: "6.1/10",
        after: "9.1/10",
        improvement: "+49%",
    },
]

export function TransformationTable() {
    return (
        <section className=" w-full relative py-10 md:py-20">
            <div className=" absolute inset-0 px-10 h-full mx-auto container w-full hidden md:flex items-center justify-between">
                <Separator orientation="vertical" />
                <Separator orientation="vertical" />
            </div>
            <div className=" max-w-6xl mx-auto px-4 md:px-0">
                <h3 className=" text-2xl md:text-4xl font-semibold font-montserrat tracking-tighter mb-2">
                    Before & After: Transformation Results
                </h3>

                <span className=" opacity-70 text-xl md:text-2xl font-medium md:mb-2 tracking-tighter">
                    Website Performance Metrics
                </span>
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
