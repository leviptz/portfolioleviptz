import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-8">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Levi Patzwaldt</title>
        <meta
          name="description"
          content="Hardware, Technology and Software I use."
        />
      </Head>
      <SimpleLayout
        title="Hardware, Technology and Software I use."
        intro="Here, you will find a detailed list of the technology, software, and hardware that I use on a daily basis. Whether you're looking for recommendations or just curious about my setup, I hope you find this information helpful."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Pro - 512 GB (2018)"></Tool>
            <Tool title="Huawei MateView GT Monitor"></Tool>
            <Tool title="Keychron K7 Keyboard"></Tool>
            <Tool title="Razer Viper Ultimate Mouse"></Tool>
          </ToolsSection>
          <ToolsSection title="Web Technology">
            <Tool title="NextJS">
              Next.js is a JavaScript framework that allows you to build server-rendered or statically exported React apps. It handles routing, automatic code splitting, server-side rendering, and optimization of your application. It also provides a simple interface for integrating with APIs, automatic optimized performance, and other helpful features for building modern web applications.
            </Tool>
            <Tool title="Tailwind">
              Tailwind CSS is a utility-first CSS framework that allows you to build custom user interfaces with ease. It provides a set of low-level CSS classes that you can use to style your HTML elements directly, without having to worry about writing custom CSS styles. Instead of creating a bunch of CSS rules for each element in your design, you can use predefined classes to style your elements quickly and easily. This makes it easy to create consistent designs without having to write a lot of CSS code.
            </Tool>
            <Tool title="Prisma">
             Prisma is a JavaScript library that provides a powerful and flexible query builder for working with databases in your JavaScript applications. It allows you to write database queries using a simple and intuitive syntax, and provides a set of powerful features for working with data, including support for database transactions, relations, and automatic data validation. Prisma works with a variety of database systems, including MySQL, PostgreSQL, and MongoDB, and integrates seamlessly with popular JavaScript frameworks like Node.js and Express. Overall, Prisma is designed to make it easy for developers to work with databases in their JavaScript applications, and to build powerful and scalable backends with minimal code.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Software">
            <Tool title="Vercel">
              Vercel is a cloud platform for building, deploying, and hosting web applications and static websites. It provides a simple and intuitive platform for developers to build and deploy their applications, with features like automatic scaling, global CDN distribution, and integration with Git repositories. Vercel also offers a range of tools for optimizing the performance and security of your applications, including serverless functions, server-side rendering, and SSL certificates. Overall, Vercel is designed to make it easy for developers to build, deploy, and host modern web applications with minimal overhead.
            </Tool>
            <Tool title="Planetscale">
              PlanetScale is a company that provides a database-as-a-service (DBaaS) platform for running scalable and highly available database clusters. Their platform is built on top of the open-source Vitess project, which is a database clustering system that was originally developed at YouTube. PlanetScale's DBaaS platform allows users to easily deploy and manage their own database clusters on top of cloud infrastructure providers like Google Cloud and AWS. This makes it easy for users to get started with a scalable database without having to worry about the complexity of setting up and managing their own database clusters.
            </Tool>
            <Tool title="Contentful">
              Contentful is a content management system (CMS) that allows users to create, manage, and publish content for websites and applications. It provides a flexible platform for creating and organizing content, with features like customizable content models, rich text editing, and media management. Contentful also offers an API-driven approach to content management, which allows developers to easily access and retrieve content for use in their applications. Overall, Contentful is designed to make it easy for teams to collaborate on creating and managing content, and to deliver that content to a wide range of digital channels.
            </Tool>
            <Tool title="Stripe">
            Stripe is a payment processing platform that allows businesses to accept and process payments online. It provides a range of tools and APIs for building custom payment solutions, including support for credit card payments, bank transfers, and mobile payments. Stripe also offers a range of security and fraud prevention features to protect businesses and their customers, as well as detailed reporting and analytics tools to help businesses understand and optimize their payment flows. Overall, Stripe is designed to make it easy for businesses to accept and process payments online, and to build custom payment solutions that meet the needs of their customers.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
