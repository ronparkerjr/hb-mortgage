import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { company } from "@/lib/nav";
import { CompactHero } from "@/components/CompactHero";

const HERO_IMG =
  "https://vibe.filesafe.space/1788700173943534517/assets/1eac8536-7f16-45dc-9e64-11493a4c9c5c.png";

/**
 * FAQ Page (`/faq`).
 * Content is 100% sourced directly from HB Mortgage Group's original FAQ page.
 */
export const Faq = () => {
  return (
    <>
      <CompactHero
        eyebrow="Resources"
        title="Frequently Asked Questions"
        subtitle="Clear, straightforward answers to the most common questions about mortgages, rates, documents, credit, and closing."
        bgImage={HERO_IMG}
        bgAlt="Question mark concept with clipboard and house model, helpful consultation theme"
        meta={{
          title: "Frequently Asked Questions — Mortgage Advice & Explanations",
          description:
            "Find detailed answers to common mortgage questions about refinancing, interest rate locks, APR, credit scores, points, PMI, appraisals, and closing from HB Mortgage Group.",
          path: "/faq",
        }}
        secondaryCta={{
          label: `Call ${company.phone}`,
          to: company.phoneHref,
        }}
      />

      {/* ===================== FAQ ACCORDION ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="eyebrow">Expert Answers</span>
              <h2 className="mt-3 h2">Frequently Asked Questions</h2>
              <p className="mt-3 lead">
                Browse complete explanations sourced directly from HB Mortgage
                Group.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="mt-10 space-y-4"
            >
              {/* Q1 */}
              <AccordionItem
                value="item-0"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  When should I refinance?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-3">
                  <p>
                    It's generally a good time to refinance when mortgage rates
                    are 2% lower than the current rate on your loan. It may be a
                    viable option even if the interest rate difference is only
                    1% or less. Any reduction can trim your monthly mortgage
                    payments.
                  </p>
                  <p>
                    <strong>Example:</strong> Your payment, excluding taxes and
                    insurance, would be about $770 on a $100,000 loan at 8.5%;
                    if the rate were lowered to 7.5%, your payment would then be
                    $700, now you're saving $70 per month.
                  </p>
                  <p>
                    Your savings depends on your income, budget, loan amount,
                    and interest rate changes. Your trusted lender can help you
                    calculate your options.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Q2 */}
              <AccordionItem
                value="item-1"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  What are points?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-3">
                  <p>
                    A point is a percentage of the loan amount, or 1-point = 1%
                    of the loan, so one point on a $100,000 loan is $1,000.
                    Points are costs that need to be paid to a lender to get
                    mortgage financing under specified terms.
                  </p>
                  <p>
                    Discount points are fees used to lower the interest rate on
                    a mortgage loan by paying some of this interest up-front.
                    Lenders may refer to costs in terms of basic points in
                    hundredths of a percent, 100 basis points = 1 point, or 1%
                    of the loan amount.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Q3 */}
              <AccordionItem
                value="item-2"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  Should I pay points to lower my interest rate?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-3">
                  <p>
                    Yes, if you plan to stay in the property for at least a few
                    years. Paying discount points to lower the loan's interest
                    rate is a good way to lower your required monthly loan
                    payment, and possibly increase the loan amount that you can
                    afford to borrow.
                  </p>
                  <p>
                    However, if you plan to stay in the property for only a year
                    or two, your monthly savings may not be enough to recoup the
                    cost of the discount points that you paid up-front.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Q4 */}
              <AccordionItem
                value="item-3"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  What is an APR?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-4">
                  <p>
                    The annual percentage rate (APR) is an interest rate
                    reflecting the cost of a mortgage as a yearly rate. This
                    rate is likely to be higher than the stated note rate or
                    advertised rate on the mortgage, because it takes into
                    account points and other credit costs. The APR allows
                    homebuyers to compare different types of mortgages based on
                    the annual cost for each loan. The APR is designed to
                    measure the &quot;true cost of a loan.&quot; It creates a
                    level playing field for lenders. It prevents lenders from
                    advertising a low rate and hiding fees.
                  </p>
                  <p>
                    The APR does not affect your monthly payments. Your monthly
                    payments are strictly a function of the interest rate and
                    the length of the loan.
                  </p>
                  <p>
                    Because APR calculations are affected by the various
                    different fees charged by lenders, a loan with a lower APR
                    is not necessarily a better rate. The best way to compare
                    loans is to ask lenders to provide you with a good-faith
                    estimate of their costs on the same type of program (e.g.
                    30-year fixed) at the same interest rate. You can then
                    delete the fees that are independent of the loan such as
                    homeowners insurance, title fees, escrow fees, attorney
                    fees, etc. Now add up all the loan fees. The lender that has
                    lower loan fees has a cheaper loan than the lender with
                    higher loan fees.
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="font-semibold text-foreground">
                      The following fees are generally included in the APR:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Points – both discount points and origination points
                      </li>
                      <li>
                        Pre-paid interest. The interest paid from the date the
                        loan closes to the end of the month.
                      </li>
                      <li>Loan-processing fee</li>
                      <li>Underwriting fee</li>
                      <li>Document-preparation fee</li>
                      <li>Private mortgage-insurance</li>
                      <li>Escrow fee</li>
                    </ul>
                  </div>

                  <div className="space-y-2 pt-2">
                    <p className="font-semibold text-foreground">
                      The following fees are normally not included in the APR:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Title or abstract fee</li>
                      <li>Borrower Attorney fee</li>
                      <li>Home-inspection fees</li>
                      <li>Recording fee</li>
                      <li>Transfer taxes</li>
                      <li>Credit report</li>
                      <li>Appraisal fee</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Q5 */}
              <AccordionItem
                value="item-4"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  What does it mean to lock the interest rate?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-3">
                  <p>
                    Mortgage rates can change from the day you apply for a loan
                    to the day you close the transaction. If interest rates rise
                    sharply during the application process it can increase the
                    borrower's mortgage payment unexpectedly. Therefore, a
                    lender can allow the borrower to &quot;lock-in&quot; the
                    loan's interest rate guaranteeing that rate for a specified
                    time period, often 30-60 days, sometimes for a fee.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Q6 */}
              <AccordionItem
                value="item-5"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  What documents do I need to prepare for my loan application?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-4">
                  <p>
                    Below is a list of documents that are required when you
                    apply for a mortgage. However, every situation is unique and
                    you may be required to provide additional documentation. So,
                    if you are asked for more information, be cooperative and
                    provide the information requested as soon as possible. It
                    will help speed up the application process.
                  </p>

                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">
                      Your Property
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Copy of signed sales contract including all riders
                      </li>
                      <li>
                        Verification of the deposit you placed on the home
                      </li>
                      <li>
                        Names, addresses and telephone numbers of all realtors,
                        builders, insurance agents and attorneys involved
                      </li>
                      <li>
                        Copy of Listing Sheet and legal description if available
                        (if the property is a condominium please provide
                        condominium declaration, by-laws and most recent budget)
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Your Income</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Copies of your pay-stubs for the most recent 30-day
                        period and year-to-date
                      </li>
                      <li>Copies of your W-2 forms for the past two years</li>
                      <li>
                        Names and addresses of all employers for the last two
                        years
                      </li>
                      <li>
                        Letter explaining any gaps in employment in the past 2
                        years
                      </li>
                      <li>Work visa or green card (copy front &amp; back)</li>
                    </ul>
                    <p className="mt-2 font-medium">
                      If <strong>self-employed</strong> or receive{" "}
                      <strong>commission</strong> or <strong>bonus</strong>,{" "}
                      <strong>interest/dividends</strong>, or{" "}
                      <strong>rental income</strong>:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Provide full tax returns for the last two years PLUS
                        year-to-date Profit and Loss statement (please provide
                        complete tax return including attached schedules and
                        statements. If you have filed an extension, please
                        supply a copy of the extension.)
                      </li>
                      <li>
                        K-1's for all partnerships and S-Corporations for the
                        last two years (please double-check your return. Most
                        K-1's are not attached to the 1040.)
                      </li>
                      <li>
                        Completed and signed Federal Partnership (1065) and/or
                        Corporate Income Tax Returns (1120) including all
                        schedules, statements and addenda for the last two
                        years. (Required only if your ownership position is 25%
                        or greater.)
                      </li>
                    </ul>
                    <p className="mt-2 font-medium">
                      If you will use <strong>Alimony</strong> or{" "}
                      <strong>Child Support</strong> to qualify:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Provide divorce decree/court order stating amount, as
                        well as, proof of receipt of funds for last year
                      </li>
                    </ul>
                    <p className="mt-2 font-medium">
                      If you receive <strong>Social Security</strong> income,{" "}
                      <strong>Disability</strong> or <strong>VA</strong>{" "}
                      benefits:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Provide award letter from agency or organization</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">
                      Source of Funds and Down Payment
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Sale of your existing home – provide a copy of the
                        signed sales contract on your current residence and
                        statement or listing agreement if unsold (at closing,
                        you must also provide a settlement/Closing Statement)
                      </li>
                      <li>
                        Savings, checking or money market funds – provide copies
                        of bank statements for the last 3 months
                      </li>
                      <li>
                        Stocks and bonds – provide copies of your statement from
                        your broker or copies of certificates
                      </li>
                      <li>
                        Gifts – If part of your cash to close, provide Gift
                        Affidavit and proof of receipt of funds
                      </li>
                      <li>
                        Based on information appearing on your application
                        and/or your credit report, you may be required to submit
                        additional documentation
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">
                      Debt or Obligations
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Prepare a list of all names, addresses, account numbers,
                        balances, and monthly payments for all current debts
                        with copies of the last three monthly statements
                      </li>
                      <li>
                        Include all names, addresses, account numbers, balances,
                        and monthly payments for mortgage holders and/or
                        landlords for the last two years
                      </li>
                      <li>
                        If you are paying alimony or child support, include
                        marital settlement/court order stating the terms of the
                        obligation
                      </li>
                      <li>Check to cover Application Fee(s)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Q7 */}
              <AccordionItem
                value="item-6"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  How is my credit judged by lenders?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-3">
                  <p>
                    Credit scoring is a system creditors use to help determine
                    whether to give you credit. Information about you and your
                    credit experiences, such as your bill-paying history, the
                    number and type of accounts you have, late payments,
                    collection actions, outstanding debt, and the age of your
                    accounts, is collected from your credit application and your
                    credit report. Using a statistical program, creditors
                    compare this information to the credit performance of
                    consumers with similar profiles. A credit scoring system
                    awards points for each factor that helps predict who is most
                    likely to repay a debt. A total number of points -- a credit
                    score -- helps predict how creditworthy you are, that is,
                    how likely it is that you will repay a loan and make the
                    payments when due.
                  </p>
                  <p>
                    The most widely used credit scores are FICO scores, which
                    were developed by Fair Isaac Company, Inc. Your score will
                    fall between 350 (high risk) and 850 (low risk).
                  </p>
                  <p>
                    Because your credit report is an important part of many
                    credit scoring systems, it is very important to make sure
                    it's accurate before you submit a credit application. To get
                    copies of your report, contact the three major credit
                    reporting agencies:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 font-medium text-foreground">
                    <li>Equifax: (800) 685-1111</li>
                    <li>Experian (formerly TRW): (888) EXPERIAN (397-3742)</li>
                    <li>Trans Union: (800) 916-8800</li>
                  </ul>
                  <p className="text-xs text-muted-foreground">
                    These agencies may charge you up to $9.00 for your credit
                    report.
                  </p>
                  <p>
                    You are entitled to receive one free credit report every 12
                    months from each of the nationwide consumer credit reporting
                    companies – Equifax, Experian and TransUnion. This free
                    credit report may not contain your credit score and can be
                    requested through the following website:{" "}
                    <a
                      href="https://www.annualcreditreport.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline font-medium"
                    >
                      www.annualcreditreport.com
                    </a>
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Q8 */}
              <AccordionItem
                value="item-7"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  What can I do to improve my credit score?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-3">
                  <p>
                    Credit scoring models are complex and often vary among
                    creditors and for different types of credit. If one factor
                    changes, your score may change -- but improvement generally
                    depends on how that factor relates to other factors
                    considered by the model. Only the creditor can explain what
                    might improve your score under the particular model used to
                    evaluate your credit application.
                  </p>
                  <p className="font-semibold text-foreground">
                    Nevertheless, scoring models generally evaluate the
                    following types of information in your credit report:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Have you paid your bills on time?</strong> Payment
                      history typically is a significant factor. It is likely
                      that your score will be affected negatively if you have
                      paid bills late, had an account referred to collections,
                      or declared bankruptcy, if that history is reflected on
                      your credit report.
                    </li>
                    <li>
                      <strong>What is your outstanding debt?</strong> Many
                      scoring models evaluate the amount of debt you have
                      compared to your credit limits. If the amount you owe is
                      close to your credit limit, that is likely to have a
                      negative effect on your score.
                    </li>
                    <li>
                      <strong>How long is your credit history?</strong>{" "}
                      Generally, models consider the length of your credit track
                      record. An insufficient credit history may have an effect
                      on your score, but that can be offset by other factors,
                      such as timely payments and low balances.
                    </li>
                    <li>
                      <strong>Have you applied for new credit recently?</strong>{" "}
                      Many scoring models consider whether you have applied for
                      credit recently by looking at &quot;inquiries&quot; on
                      your credit report when you apply for credit. If you have
                      applied for too many new accounts recently, that may
                      negatively affect your score. However, not all inquiries
                      are counted. Inquiries by creditors who are monitoring
                      your account or looking at credit reports to make
                      &quot;prescreened&quot; credit offers are not counted.
                    </li>
                    <li>
                      <strong>
                        How many and what types of credit accounts do you have?
                      </strong>{" "}
                      Although it is generally good to have established credit
                      accounts, too many credit card accounts may have a
                      negative effect on your score. In addition, many models
                      consider the type of credit accounts you have. For
                      example, under some scoring models, loans from finance
                      companies may negatively affect your credit score.
                    </li>
                  </ul>
                  <p>
                    Scoring models may be based on more than just information in
                    your credit report. For example, the model may consider
                    information from your credit application as well: your job
                    or occupation, length of employment, or whether you own a
                    home.
                  </p>
                  <p>
                    To improve your credit score under most models, concentrate
                    on paying your bills on time, paying down outstanding
                    balances, and not taking on new debt. It's likely to take
                    some time to improve your score significantly.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Q9 */}
              <AccordionItem
                value="item-8"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  What is an appraisal?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-3">
                  <p>
                    An Appraisal is an estimate of a property's fair market
                    value. It's a document generally required (depending on the
                    loan program) by a lender before loan approval to ensure
                    that the mortgage loan amount is not more than the value of
                    the property.
                  </p>
                  <p>
                    The Appraisal is performed by an &quot;Appraiser&quot;
                    typically a state-licensed professional who is trained to
                    render expert opinions concerning property values, its
                    location, amenities, and physical conditions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Q10 */}
              <AccordionItem
                value="item-9"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  What is PMI (Private Mortgage Insurance)?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-3">
                  <p>
                    On a conventional mortgage, when your down payment is less
                    than 20% of the purchase price of the home, mortgage lenders
                    usually require you get Private Mortgage Insurance (PMI) to
                    protect them in case you default on your mortgage.
                  </p>
                  <p>
                    Sometimes you may need to pay up to 1-year's worth of PMI
                    premiums at closing which can cost several hundred dollars.
                    The best way to avoid this extra expense is to make a 20%
                    down payment, or ask about other loan program options.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Q11 */}
              <AccordionItem
                value="item-10"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  What is 80-10-10 financing?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-3">
                  <p>
                    Surprising as it may seem, some folks with hefty incomes
                    find that it's mighty tough for them to save enough money to
                    make a 20% cash down payment on their dream homes. Using
                    conventional financing, such buyers must purchase Private
                    Mortgage Insurance (PMI) which increases the cost of home
                    ownership and, ironically, makes it even more difficult to
                    qualify for the mortgage.
                  </p>
                  <p>
                    However, if you're a dues-paying member of the
                    cash-challenged class, don't despair. Given that your income
                    is sufficiently high, it's eminently possible to avoid
                    getting stuck with PMI. That is why 80-10-10 financing was
                    invented. It is called 80-10-10 because a savings and loan
                    association, bank, or other institutional lender provides a
                    traditional 80% first mortgage, you get a 10% second
                    mortgage, and make a cash down payment equal to 10% of the
                    home's purchase price. By using this method, you are no
                    longer obligated to take out PMI on your property.
                  </p>
                  <p>
                    The same principle applies if you can only afford to make a
                    5% down; 80-15-5 financing is also available. However,
                    because a smaller cash down payment increases the lender's
                    risk of default, do not be surprised when you are asked to
                    pay higher loan fees and a higher mortgage interest rate for
                    80-15-5 than you pay for 80-10-10.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Q12 */}
              <AccordionItem
                value="item-11"
                className="surface-card overflow-hidden border border-border px-6 rounded-lg"
              >
                <AccordionTrigger className="py-5 font-display text-base sm:text-lg font-bold text-left hover:no-underline text-foreground">
                  What happens at closing?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed text-muted-foreground pb-6 space-y-3">
                  <p>
                    The property is officially transferred from the seller to
                    you at &quot;Closing&quot; or &quot;Funding&quot;.
                  </p>
                  <p>
                    At closing, the ownership of the property is officially
                    transferred from the seller to you. This may involve you,
                    the seller, real estate agents, your attorney, the lender's
                    attorney, title or escrow firm representatives, clerks,
                    secretaries, and other staff. You can have an attorney
                    represent you if you can't attend the closing meeting, i.e.,
                    if you're out-of-state. Closing can take anywhere from
                    1-hour to several depending on contingency clauses in the
                    purchase offer, or any escrow accounts needing to be set up.
                  </p>
                  <p>
                    Most paperwork in closing or settlement is done by attorneys
                    and real estate professionals. You may or may not be
                    involved in some of the closing activities; it depends on
                    who you are working with.
                  </p>
                  <p>
                    Prior to closing you should have a final inspection, or
                    &quot;walk-through&quot; to ensure requested repairs were
                    performed, and items agreed to remain with the house are
                    there such as drapes, lighting fixtures, etc.
                  </p>
                  <p>
                    In most states the settlement is completed by a title or
                    escrow firm in which you forward all materials and
                    information plus the appropriate cashier's checks so the
                    firm can make the necessary disbursement. Your
                    representative will deliver the check to the seller, and
                    then give the keys to you.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING CTA BANNER ===================== */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container-hb text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="h2 text-primary-foreground">
              Have More Questions? We&rsquo;re Here to Help!
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
              Contact our team in Scarborough, Maine directly for personalized
              guidance.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact-us">
                  Contact Us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="onDarkOutline" size="lg">
                <a href={company.phoneHref}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call {company.phone}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
