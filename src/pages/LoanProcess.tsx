import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { company, APPLY_URL } from "@/lib/nav";
import { CompactHero } from "@/components/CompactHero";

const HERO_IMG =
  "https://vibe.filesafe.space/1788700173943534517/assets/bbed4fe0-7f9a-4c89-bede-d78b2fe1ef2c.png";

/**
 * Loan Process Page (`/loan-process`).
 * Built using the exact content from client's original site:
 * Step 1: Find Out How Much You Can Borrow (LTV, FICO, Self Employed, Down Payment)
 * Step 2: Select The Right Loan Program (Fixed vs ARM)
 * Step 3: Apply For A Loan
 * Step 4: Begin Loan Processing (Income, Credit, Asset, Property Appraisal + Tips)
 * Step 5: Close Your Loan
 */
export const LoanProcess = () => {
  return (
    <>
      <CompactHero
        eyebrow="Step-by-Step Roadmap"
        title="The Mortgage Loan Process"
        subtitle="From your initial calculation of buying power to your final closing day, we walk with you through every stage so there are no surprises."
        bgImage={HERO_IMG}
        bgAlt="Checklist and house key on a desk representing the loan process"
        meta={{
          title: "Loan Process — Step-by-Step Mortgage Roadmap",
          description:
            "Understand the 5 steps of obtaining a mortgage with HB Mortgage Group: borrowing power, selecting a loan, application, loan processing, and closing.",
          path: "/loan-process",
        }}
      />

      {/* ===================== PROCESS STEPS ===================== */}
      <section className="section">
        <div className="container-hb">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <span className="eyebrow">5 Clear Steps</span>
              <h2 className="mt-3 h2">Your Roadmap to Homeownership</h2>
              <p className="mt-3 lead">
                Understand every stage of your mortgage journey from initial
                calculations to closing day.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {/* STEP 1 */}
              <div className="surface-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-4 border-b border-border pb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg">
                    1
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Step 1: Find Out How Much You Can Borrow
                  </h3>
                </div>

                <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-foreground">
                  <p>
                    The first step in obtaining a loan is to determine how much
                    money you can borrow. In case of buying a home, you should
                    determine how much home you can afford even before you begin
                    looking. By answering a few simple questions, we will
                    calculate your buying power, based on standard lender
                    guidelines.
                  </p>

                  <div className="rounded-xl bg-primary/5 p-5 border border-primary/10 text-foreground">
                    <p className="font-semibold text-primary">
                      Pre-Approval Advantages:
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      You may also elect to get pre-approved for a loan which
                      requires verification of your income, credit, assets and
                      liabilities. It is recommended that you get pre-approved
                      before you start looking for your new house so you:
                    </p>
                    <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-foreground font-medium">
                      <li>Look for properties within your range.</li>
                      <li>
                        Be in a better position when negotiating with the seller
                        (seller knows your loan is already approved).
                      </li>
                      <li>Close your loan quicker</li>
                    </ol>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-display font-bold text-lg text-foreground mb-4">
                      More on Pre-Qualification
                    </h4>

                    <div className="space-y-6">
                      <div className="rounded-lg bg-muted/40 p-4 border border-border">
                        <h5 className="font-bold text-foreground text-base">
                          LTV and Debt-to-Income Ratios
                        </h5>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          LTV or Loan-To-Value ratio is the maximum amount of
                          exposure that a lender is willing to accept in
                          financing your purchase. Lenders are usually prepared
                          to lend a higher percentage of the value, even up to
                          100%, to creditworthy borrowers. Another consideration
                          in approving the maximum amount of loan for a
                          particular borrower is the ratio of monthly debt
                          payments (such as auto and personal loans) to income.
                          Rule of thumb states that your monthly mortgage
                          payments should not exceed 1/3 of your gross monthly
                          income. Therefore, borrowers with high debt-to-income
                          ratio need to pay a higher down payment in order to
                          qualify for a lower LTV ratio.
                        </p>
                      </div>

                      <div className="rounded-lg bg-muted/40 p-4 border border-border">
                        <h5 className="font-bold text-foreground text-base">
                          FICO™ Credit Score
                        </h5>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          FICO™ Credit Scores are widely used by almost all
                          types of lenders in their credit decision. It is a
                          quantified measure of creditworthiness of an
                          individual, which is derived from mathematical models
                          developed by Fair Isaac and Company in San Rafael,
                          California. FICO™ scores reflect credit risk of the
                          individual in comparison with that of general
                          population. It is based on a number of factors
                          including past payment history, total amount of
                          borrowing, length of credit history, search for new
                          credit, and type of credit established. When you begin
                          shopping around for a new credit card or a loan, every
                          time a lender runs your credit report it adversely
                          effects your credit score. It is, therefore, advisable
                          that you authorize the lender/broker to run your
                          credit report only after you have chosen to apply for
                          a loan through them.
                        </p>
                      </div>

                      <div className="rounded-lg bg-muted/40 p-4 border border-border">
                        <h5 className="font-bold text-foreground text-base">
                          Self Employed Borrowers
                        </h5>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          Self employed individuals often find that there are
                          greater hurdles to borrowing for them than an employed
                          person. For many conventional lenders the problem with
                          lending to the self employed person is documenting an
                          applicant's income. Applicants with jobs can provide
                          lenders with pay stubs, and lenders can verify the
                          information through their employer. In the absence of
                          such verifiable employment records, lenders rely on
                          income tax returns, which they typically require for 2
                          years.
                        </p>
                      </div>

                      <div className="rounded-lg bg-muted/40 p-4 border border-border">
                        <h5 className="font-bold text-foreground text-base">
                          Source of Down Payment
                        </h5>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          Lenders expect borrowers to come up with sufficient
                          cash for the down payment and other fees payable by
                          the borrower at the time of funding the loan.
                          Generally, down payment requirements are made with
                          funds the borrowers have saved. If a borrower does not
                          have the required down payment they may receive “gift
                          funds” from an acceptable donor with a signed letter
                          stating that the gifted funds do not have to be paid
                          back.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="surface-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-4 border-b border-border pb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg">
                    2
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Step 2: Select The Right Loan Program
                  </h3>
                </div>

                <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Home loans come in many shapes and sizes. Deciding which
                    loan makes the most sense for your financial situation and
                    goals means understanding the benefits of each. Whether you
                    are buying a home or refinancing, there are 2 basic types of
                    home loans. Each has different reasons you'd choose them.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                      <h4 className="font-display font-bold text-lg text-foreground">
                        1) Fixed Rate Mortgage
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Fixed rate mortgages usually have terms lasting 15 or 30
                        years. Throughout those years, the interest rate and
                        monthly payments remain the same. You would select this
                        type of loan when you:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                          <span>Plan to live in home more than 7 years</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                          <span>
                            Like the stability of a fixed principal/interest
                            payment
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                          <span>
                            Don't want to run the risk of future monthly payment
                            increases
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                          <span>
                            Think your income and spending will stay the same
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                      <h4 className="font-display font-bold text-lg text-foreground">
                        2) Adjustable Rate Mortgage
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Adjustable Rate Mortgages (often called ARMs) typically
                        last for 15 or 30 years, just like fixed rate mortgages.
                        But during those years, the interest rate on the loan
                        may go up or down. Monthly payments increase or
                        decrease. You would select this type of loan when you:
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                          <span>
                            Plan to stay in your home less than 5 years
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                          <span>
                            Don't mind having your monthly payment periodically
                            change (up or down)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                          <span>
                            Comfortable with the risk of possible payment
                            increases in future
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent shrink-0" />
                          <span>
                            Think your income will probably increase in the
                            future
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-sm italic text-muted-foreground">
                    By carefully considering the above factors and seeking our
                    professional advice, you should be able to select the one
                    loan that matches your present condition as well as your
                    future financial goals.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="surface-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-4 border-b border-border pb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg">
                    3
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Step 3: Apply For A Loan
                  </h3>
                </div>

                <div className="mt-6 flex flex-col items-start gap-4">
                  <p className="text-base text-muted-foreground">
                    Ready to start your home loan application? You can begin
                    right online in just a few minutes.
                  </p>
                  <Button asChild variant="cta" size="lg">
                    <a
                      href={APPLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Click To Apply For A Loan
                      <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="surface-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-4 border-b border-border pb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg">
                    4
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Step 4: Begin Loan Processing
                  </h3>
                </div>

                <div className="mt-6 space-y-6 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Although lenders conform to standards set by government
                    agencies, loan approval guidelines vary depending on the
                    terms of each loan. In general, approval is based on two
                    factors: your ability and willingness to repay the loan and
                    the value of the property.
                  </p>
                  <p>
                    Once your loan application has been received we will start
                    the loan approval process immediately. Your loan processor
                    will verify all of the information you have given. If any
                    discrepancies are found, either the processor or your loan
                    officer will troubleshoot to straighten them out. This
                    information includes:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-lg border border-border bg-card p-4">
                      <h5 className="font-bold text-foreground">
                        Income/Employment Check
                      </h5>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Is your income sufficient to cover monthly payments?
                        Industry guidelines are used to evaluate your income and
                        your debts.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-4">
                      <h5 className="font-bold text-foreground">
                        Credit Check
                      </h5>
                      <p className="mt-1 text-sm text-muted-foreground">
                        What is your ability to repay debts when due? Your
                        credit report is reviewed to determine the type and
                        terms of previous loans. Any lapses or delays in payment
                        are considered and must be explained.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-4">
                      <h5 className="font-bold text-foreground">
                        Asset Evaluation
                      </h5>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Do you have the funds necessary to make the down payment
                        and pay closing costs?
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-4">
                      <h5 className="font-bold text-foreground">
                        Property Appraisal
                      </h5>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Is there sufficient value in the property? The property
                        is appraised to determine market value. Location and
                        zoning play a part in the evaluation.
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-card p-4 md:col-span-2">
                      <h5 className="font-bold text-foreground">
                        Other Documentation
                      </h5>
                      <p className="mt-1 text-sm text-muted-foreground">
                        In some cases, additional documentation might be
                        required before making a final determination regarding
                        your loan approval.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-primary/5 p-5 border border-primary/10">
                    <h5 className="font-bold text-foreground text-base">
                      In order to improve your chances of getting a loan
                      approval:
                    </h5>
                    <ol className="mt-3 list-decimal pl-5 space-y-2 text-sm text-muted-foreground">
                      <li>
                        Fill out your loan application completely. You may use
                        our online forms to expedite the process.
                      </li>
                      <li>
                        Respond promptly to any requests for additional
                        documentation especially if your rate is locked or if
                        your loan is to close by a certain date.
                      </li>
                      <li>
                        Do not move money into or from your bank accounts
                        without a paper trail. If you are receiving money from
                        friends, family or other relatives, please prepare a
                        gift letter and contact us.
                      </li>
                      <li>
                        Do not make any major purchases until your loan is
                        closed. Purchases cause your debts to increase and might
                        have an adverse affect on your current application.
                      </li>
                      <li>
                        Do not go out of town around your loan's closing date.
                        If you plan to be out of town, you may want to sign a
                        Power of Attorney.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* STEP 5 */}
              <div className="surface-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-4 border-b border-border pb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg">
                    5
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Step 5: Close Your Loan
                  </h3>
                </div>

                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    After your loan is approved, you are ready to sign the final
                    loan documents. You must review the documents prior to
                    signing and make sure that the interest rate and loan terms
                    are what you were promised. Also, verify that the name and
                    address on the loan documents are accurate. The signing
                    normally takes place in front of a notary public.
                  </p>
                  <p>
                    There are also several fees associated with obtaining a
                    mortgage and transferring property ownership which you will
                    be expected to pay at closing. Bring a cashiers check for
                    the down payment and closing costs if required. Personal
                    checks are normally not accepted. You also will need to show
                    your homeowner's insurance policy, and any other
                    requirements such as flood insurance, plus proof of payment.
                  </p>
                  <p>
                    Your loan will normally close shortly after you have signed
                    the loan documents. On owner occupied refinance loan
                    transactions federal law requires that you have 3 days to
                    review the documents before your loan transaction can close.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING CTA BANNER ===================== */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container-hb text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="h2 text-primary-foreground">
              Ready to Start Your Loan Process?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
              Talk directly with the HB team to calculate your buying power or
              review your options.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button asChild variant="cta" size="lg">
                <Link to="/contact-us">
                  Talk With a Mortgage Expert
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

export default LoanProcess;
