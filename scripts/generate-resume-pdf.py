from pathlib import Path
import shutil

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "Milos-Dostanic-Resume.pdf"
PUBLIC = ROOT / "public" / "Milos-Dostanic-Resume.pdf"

INK = colors.HexColor("#111318")
MUTED = colors.HexColor("#5F6471")
BLUE = colors.HexColor("#2742FF")
PAPER = colors.HexColor("#F6F7FB")
LINE = colors.HexColor("#D7D9E2")
PALE_BLUE = colors.HexColor("#E9ECFF")

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    "Name",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=31,
    leading=32,
    textColor=INK,
    spaceAfter=5,
)
role_style = ParagraphStyle(
    "Role",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=12.5,
    leading=15,
    textColor=INK,
)
contact_style = ParagraphStyle(
    "Contact",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8,
    leading=11.5,
    textColor=MUTED,
    alignment=TA_RIGHT,
)
section_style = ParagraphStyle(
    "Section",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8,
    leading=10,
    tracking=1.5,
    textColor=BLUE,
    spaceBefore=6,
    spaceAfter=7,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=8.6,
    leading=12.1,
    textColor=MUTED,
)
company_style = ParagraphStyle(
    "Company",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=11.2,
    leading=13,
    textColor=INK,
)
date_style = ParagraphStyle(
    "Date",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.5,
    leading=10,
    textColor=MUTED,
    alignment=TA_RIGHT,
)
job_style = ParagraphStyle(
    "Job",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=8.3,
    leading=10.5,
    textColor=BLUE,
    spaceAfter=3,
)
label_style = ParagraphStyle(
    "Label",
    parent=styles["Normal"],
    fontName="Helvetica-Bold",
    fontSize=7.2,
    leading=9,
    textColor=BLUE,
    spaceAfter=3,
)
small_style = ParagraphStyle(
    "Small",
    parent=styles["Normal"],
    fontName="Helvetica",
    fontSize=7.8,
    leading=10.8,
    textColor=MUTED,
)


EXPERIENCE = [
    (
        "Space Inch",
        "Senior Product Designer",
        "Mar 2024 - Present",
        "United States / Remote",
        "Lead product design across complex B2B engagements, covering product strategy, UX, prototypes, design systems, AI workflows, and development-ready delivery.",
    ),
    (
        "TheBrendz",
        "Senior Product Designer",
        "Jan 2016 - Present",
        "Serbia",
        "Design digital products across product strategy, UX/UI, system design, functional prototypes, and implementation-ready solutions.",
    ),
    (
        "Freelance",
        "Product Designer",
        "Jun 2008 - Present",
        "Independent",
        "Independent design work spanning early product thinking, user flows, visual design, prototypes, and digital delivery.",
    ),
    (
        "Polyrific",
        "Product Designer",
        "Mar 2023 - Mar 2024",
        "United States / Remote",
        "Designed an AI platform for organizing, analyzing, and interacting with personal data. Work covered research, flows, high-fidelity UI, prototypes, and the product design system.",
    ),
    (
        "KOD WORKS",
        "Senior UI/UX Designer",
        "Jun 2023 - Nov 2023",
        "Serbia",
        "Designed interfaces and flows for games, apps, and websites, including interaction maps and Lottie-based product motion.",
    ),
    (
        "Quantox Technology",
        "Medior to Senior UI/UX Designer",
        "Mar 2019 - Jun 2023",
        "Serbia",
        "Worked with product managers, engineers, and stakeholders on product UX, prototypes, interface design, and visual communication across client engagements.",
    ),
    (
        "Fantastic Machines GmbH",
        "UI Designer",
        "Jan 2016 - Jan 2017",
        "Serbia",
        "Designed interfaces for web projects and contributed UI/UX improvements to the Paxxon application.",
    ),
    (
        "Promo Advertising",
        "Graphic Designer",
        "Sep 2013 - Jun 2014",
        "Serbia",
        "Created graphic design for advertising and campaign materials.",
    ),
    (
        "The HEINEKEN Company",
        "Graphic Designer",
        "2013",
        "",
        "Designed the Belgrade 2013 Limited Edition can.",
    ),
]

PROOF = [
    (
        "WorkLight",
        "PERSONAL PRODUCT / ACTIVE DEVELOPMENT",
        "A local-first daily work operator with evidence-linked priorities, read-only integrations, a PostgreSQL data model, background jobs, and explicit trust states.",
        "https://github.com/mdostanic85/morning",
    ),
    (
        "OriginChains",
        "CLIENT WORK / CLIMATE SAAS",
        "Lead product design for company discovery, trust-heavy data presentation, activity feeds, and a Figma system tuned for engineering handoff.",
        "https://www.dostanic.net/work/originchains",
    ),
    (
        "AI-connected design systems",
        "WORKING METHOD",
        "A documented workflow connecting Figma variables, component APIs, functional prototypes, code review, and design QA.",
        "https://www.dostanic.net/work/ai-design-system-workflow",
    ),
]


def section(title: str):
    return Paragraph(title.upper(), section_style)


def experience_item(company, role, period, location, summary):
    heading = Table(
        [[Paragraph(company, company_style), Paragraph(period, date_style)]],
        colWidths=[126 * mm, 48 * mm],
    )
    heading.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    role_line = role if not location else f"{role} | {location}"
    return KeepTogether(
        [
            heading,
            Paragraph(role_line, job_style),
            Paragraph(summary, body_style),
            Spacer(1, 5 * mm),
        ]
    )


def proof_item(title, label, body, href):
    return KeepTogether(
        [
            Paragraph(f'<a href="{href}" color="#111318"><b>{title}</b></a>', company_style),
            Paragraph(label, label_style),
            Paragraph(body, body_style),
            Spacer(1, 4 * mm),
        ]
    )


def draw_page(canvas, doc):
    width, height = A4
    canvas.saveState()
    canvas.setFillColor(PAPER)
    canvas.rect(0, 0, width, height, stroke=0, fill=1)
    canvas.setStrokeColor(BLUE)
    canvas.setLineWidth(2)
    canvas.line(20 * mm, height - 13 * mm, width - 20 * mm, height - 13 * mm)
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(20 * mm, 14 * mm, width - 20 * mm, 14 * mm)
    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 7)
    canvas.drawString(20 * mm, 9 * mm, "DOSTANIC.NET")
    canvas.drawRightString(width - 20 * mm, 9 * mm, f"PAGE {doc.page} / 2")
    canvas.restoreState()


def build_resume():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC.parent.mkdir(parents=True, exist_ok=True)

    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=20 * mm,
        bottomMargin=19 * mm,
        title="Milos Dostanic Resume",
        author="Milos Dostanic",
        subject="Senior Product Designer and Product Builder",
    )

    contact = Paragraph(
        '<a href="mailto:milos@dostanic.net" color="#5F6471">milos@dostanic.net</a><br/>'
        '<a href="https://www.dostanic.net" color="#5F6471">www.dostanic.net</a><br/>'
        '<a href="https://www.linkedin.com/in/milos-dostanic/" color="#5F6471">linkedin.com/in/milos-dostanic</a><br/>'
        '<a href="https://github.com/mdostanic85" color="#5F6471">github.com/mdostanic85</a><br/>'
        'Serbia / CET / Remote worldwide',
        contact_style,
    )
    identity = [
        Paragraph("Milos Dostanic", name_style),
        Paragraph("Senior Product Designer & Product Builder", role_style),
    ]
    header = Table([[identity, contact]], colWidths=[112 * mm, 62 * mm])
    header.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )

    profile = Table(
        [[Paragraph(
            "Senior Product Designer with 20 years across design and 12 years in digital products. "
            "I work on complex B2B UX, design systems, functional prototypes, AI workflows, and "
            "implementation review. I am most useful when product logic is unclear, states are dense, "
            "or design and engineering need a shared model.",
            body_style,
        )]],
        colWidths=[174 * mm],
    )
    profile.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, -1), PALE_BLUE),
                ("BOX", (0, 0), (-1, -1), 0.5, colors.HexColor("#C8CFFF")),
                ("LEFTPADDING", (0, 0), (-1, -1), 10),
                ("RIGHTPADDING", (0, 0), (-1, -1), 10),
                ("TOPPADDING", (0, 0), (-1, -1), 8),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )

    story = [header, Spacer(1, 8 * mm), section("Profile"), profile, Spacer(1, 7 * mm), section("Experience")]
    story.extend(experience_item(*item) for item in EXPERIENCE[:6])
    story.append(PageBreak())
    story.append(section("Experience continued"))
    story.extend(experience_item(*item) for item in EXPERIENCE[6:])
    story.append(section("Selected proof"))
    story.extend(proof_item(*item) for item in PROOF)

    skills_left = Paragraph(
        "Complex B2B and enterprise UX<br/>Information architecture<br/>Data-heavy interfaces<br/>Design systems and governance",
        small_style,
    )
    skills_right = Paragraph(
        "Functional prototypes<br/>Figma-to-code workflows<br/>Engineering collaboration and design QA<br/>AI product flows and trust states",
        small_style,
    )
    skills = Table([[skills_left, skills_right]], colWidths=[87 * mm, 87 * mm])
    skills.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    story.extend([section("Core expertise"), skills, Spacer(1, 6 * mm)])

    education = Paragraph(
        "<b>Technical School</b><br/>Computer Electrician, IT<br/>2000 - 2004",
        small_style,
    )
    languages = Paragraph(
        "<b>English</b><br/>Professional working proficiency<br/><br/>"
        "<b>German</b><br/>Limited working proficiency",
        small_style,
    )
    details = Table([[education, languages]], colWidths=[87 * mm, 87 * mm])
    details.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("LEFTPADDING", (0, 0), (-1, -1), 0),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
                ("TOPPADDING", (0, 0), (-1, -1), 0),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
            ]
        )
    )
    story.extend([section("Education & languages"), details])

    doc.build(story, onFirstPage=draw_page, onLaterPages=draw_page)
    shutil.copyfile(OUTPUT, PUBLIC)


if __name__ == "__main__":
    build_resume()
