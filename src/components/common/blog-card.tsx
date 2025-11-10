import { Post } from "@/interface";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

interface Props {
  post: Post;
  index?: number;
}

const BlogCard = ({ post, index }: Props) => {
  const imageUrl = urlFor(post?.mainImage?.asset?._ref).url();
  const altText = post?.mainImage?.alt || "Blog image";
  const authorImageUrl = post?.author?.image ? urlFor(post.author.image).width(80).height(80).url() : null;

  if (index === 0) {
    return (
      <div className="md:col-span-3 w-full flex flex-col">
        <Link className="group w-full h-full bg-white border border-input/50 md:pl-2.5 md:py-2.5 py-4 pl-4 pr-4 md:pr-8 hover:shadow rounded-lg md:rounded-xl" href={`/blog/${post?.slug?.current}`}>
          <div className="w-full h-full flex flex-col md:flex-row-reverse gap-8 items-stretch">
            <div className="h-full">
              <div className=" max-w-[44rem] md:py-6 flex flex-col justify-between md:h-[28rem] ">
                <div>
                  <div className="inline-flex items-center gap-2 text-foreground/70">
                    <span className="text-sm md:text-[15px] text-primary">Featured</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm md:text-[15px] text-primary">{post?.categories?.[0]?.title || post?.tags?.[0]?.name || 'Article'}</span>
                  </div>
                  <h3 className=" text-balance text-foreground text-2xl leading-tight md:text-[2.8rem] md:leading-[0.98] tracking-tighter mt-2 font-semibold font-montserrat">{post?.title}</h3>
                </div>
                <div className=" flex items-center w-full justify-between mt-4 md:mt-0">
                  <div className="text-foreground/70 text-sm inline-flex items-center gap-3">
                    {authorImageUrl && (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image src={authorImageUrl} alt={post?.author?.name || 'Author'} fill className="object-cover" />
                      </div>
                    )}
                    {post?.author?.name && <span className=" text-sm md:text-[15px]">By {post.author.name}</span>}
                  </div>

                  {post?.publishedAt && (
                    <p className="text-sm md:text-[15px] text-foreground/70">{new Date(post.publishedAt).toLocaleDateString()}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full h-[20rem] md:h-[28rem] relative overflow-clip border border-foreground/20 rounded-lg">
              <Image
                fill
                quality={100}
                src={imageUrl}
                className="object-cover group-hover:scale-110 transition-all ease-in-out duration-300"
                alt={altText}
              />
            </div>
          </div>
        </Link>
        <Separator orientation="horizontal" className=" w-full mt-10 hidden md:block" />
      </div>
    );
  }
  // Default card for non-featured posts
  return (
    <Link className="group hover:shadow bg-white rounded-lg md:rounded-xl border border-input/50" href={`/blog/${post?.slug?.current}`}>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-[16rem] relative overflow-clip rounded-lg border border-foreground/20">
          <Image
            fill
            quality={100}
            src={imageUrl}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover rounded-lg group-hover:scale-110 transition-all ease-in-out duration-300"
            alt={altText}
          />
        </div>
        <div className=" px-4 md:pt-4 pb-4 md:pb-6">
          <div className="inline-flex items-center gap-2 text-foreground/70 mb-2 mt-4">
            <span className="text-sm md:text-[15px]">{post?.categories?.[0]?.title || post?.tags?.[0]?.name || 'Article'}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-foreground/70" />
            <span className="text-sm md:text-[15px]">~8 min read</span>
          </div>
          <h3 className="text-foreground font-medium tracking-tight mb-2 text-xl text-balance">{post?.title}</h3>
          <div className="inline-flex items-center w-full justify-between text-foreground/70">
            <div className="inline-flex items-center gap-2 text-foreground/70">
              {authorImageUrl && (
                <div className="relative w-6 h-6 rounded-full overflow-hidden">
                  <Image src={authorImageUrl} alt={post?.author?.name || 'Author'} fill className="object-cover" />
                </div>
              )}
              <span className="text-sm md:text-[15px]">{post?.author?.name || 'Reframe Labs'}</span>
            </div>
            <span className="text-sm md:text-[15px]">{post?.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ''}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
