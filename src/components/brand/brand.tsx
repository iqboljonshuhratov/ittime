import React from "react";

const partners = [
  {
    id: 1,
    src: "data:image/png;base64,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",
    alt: "Partner 1",
  },
  {
    id: 2,
    src: "https://www.wtlogistic.uz/assets/partner16-DaOPcQ4j.png",
    alt: "Partner 2",
  },
  {
    id: 3,
    src: "https://www.wtlogistic.uz/assets/partner20-Bgt9SmJQ.png",
    alt: "Partner 3",
  },
  {
    id: 4,
    src: "https://www.wtlogistic.uz/assets/partner13-C0puE4Ej.png",
    alt: "Partner 4",
  },
  {
    id: 5,
    src: "https://www.wtlogistic.uz/assets/partner15-DQIE_Sh4.png",
    alt: "Partner 5",
  },
  {
    id: 6,
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAAA0CAYAAADmD4h7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAPEklEQVR4nO2de3xU1bXHf2ufmYkREvIABEnUoqhARXySmXOQ6JWrtbQU7629LWq11sL1o0WpL6wVbgtyC6jIQykiUh8X7EUtaEWLfhrMPBIwlgLCRXwUEiQ8kgnJhHmcOXvdP5IJeUzIPM4kIc7385lP5uyz91q/M7Oyzz77NQSTqVTyb4bCUwFcCaZ8gHeBsEmEsHoYaivN9pem70BmGaq05l8N8EoQXRrtPDMCgniRCNXOPxs4YZbfNH2HpIOxCnkFbMUCEP04thJcBfAjhSHv/yTrO03fIuFg/Ao4w2LJexhEj4BwZtwGmMtB/IvCkHdHohrS9C0SCsYqW94tDCwE6JykvDMzgJesemjWEPiOJGUrzWlPXMF4yJY3SmesJCLVTBHMXE/McwvC3sUE6GbaTnP6EFMwfo2sgYbVOg/Az0EkUqhnHxlyZoHhfSeFPtL0Uk4ZjAxYDlrz7pPAbCIa0F2iwPgQuj69EPWfd5vPND1Op8FYZRlwHQvLCgAjulHPSZjDDCzrr/OcPHiP94iGNN1Kh2CsRPYI2CyLAbqpJwR1gPkYgR8fpntfIED2tJw0qaMlGH3Llw8JVuxeGv78i39HIAAOBJtfAXCw+a8/0HNKmXcSY1pBuNbTcyLSpBICAO/d94/Neuz+MuW8czNiKSTrG4BIgAZa/w2CA/6OacEAEAg2BXPwZFq0fJE0RPtnCARBzA8U6LWLTfwMFLvdPk5R6DpmXATQMCKO+yGNmWqEMJ4uLS1ztU4fNWqULTc3ZzYRTOmBYKYQkdzgdHqeA8CRdE2z38hM04mQY4YfAJ+GQuEntm7dWgMAqqr+iAjTATZt1C4CM20FsMzCQIaXw2/HGogAILKzAGSZrSkm9H/seqZ+02Zr9qyZC5O1pWlF32MWLxDRWQBALR9z/J83ESCl+M4VV1wxtKKioqWNm5eXMwugx5LV2toPICaqqj3T5fIsAoBx48aNAMQmMjdMJthslrEA1PHjx41hxrpmBaY6AQAiTAB4gqiy5P5S37O3wHQPKcJ66bdxxuSb5jGgJGFGqKr6JKBsjASiGRBRZkZGxrfaJSc3MNC5t9GRd1YrnZsiH2MAQErLJamxfxJmXCaY6KehbZ/A+/N7IetOk4dWw7BWWvKuT7S4qqrziDDLTEkRpJTtb/HmVyVNZlNktw2WJk+Su8poBgJAIQA0vrIO1SOvhG/Fi93hNy5C2z6BvmNXy/GJtesB4vMTsWW32/+FCI+aJq4dRNTmi2NOVTD2PSxElB05kLVe1M14BL4Vq5G7ZAEyrjF11C8+wmGceOtthEqc6P/wDFjObbrbGYeq0bBoCcAiLxGzQohnOzvHzH8nQn2CigEAUkpf62MiRKtVvAAvSc4Pb+8qDzNvJ0Iyt7sAABgGDisKb+naH0YS0eB2yUGAy7oqS0S6JdqJ8J69ODpxMjIn3YgBv/8tLBcMj0m5GXCDD76XXoF/7XpkPXw/cpY/1eZ8/eO/S9i2w+G4igijo5yqA4wpLldZScLGO4EZFOWG6nU63XPM9tUR+qXT6SpN1orH4/kQwIdd5VNV9VUAU1unMeOwy+UujsXPKbsw/O+8h8NjVRx/5AnI40lVGF1iVB3E8Udn49DwSyAPHcagD95G5pTvtckT2r4Tja++nrAPIprYiffbnU7zAzFNfEStGVvDuo6Gxc+h8dXXkT3nMfT/2a2AksyDbFtCf98B3+LlOLF+A2xXXoZBrs2wXnhB1Lx19z2YrLvC9gnM7He5yt7urIDD4bhGCFwXqwO/P7isoqLiWKukcJRsuZrmmBOLPSlR43a7l8bqvzVE+EjTYmtqMWO8y+VyJuLHLLoMxgjyWA3q7v0VfMtXJt+eZIZ/02b4Fi9HcIsLYlA+clcuQb+pt3RaxL/xXYS2ViTus4ns9glEqOoss8PhmCkEPdXZ+WjYbLZ1AI51kS0XoNmx2BOC9wFIKBhPN+IeaYi0J2t+eDvCX/4zrrIcCMK36mVUj74aNVN+gmCpB/2n34Uhn247ZSCyYaDu0Zi+uwSgTrstiHBripymiULMNWN7/BvfRWDTZvS/bxqyZv2qeVQmOvJoDXwrXoTv+VWQNbUAAOvYMchdtRS2S6I9T7Sl8blVML74KlGpLRAxte/2Yz7V0B/Z4vXBbP5w2TeFpCbKsq6j4ellqB55JRpffBmQbSfV6Hv3wXvPTBw6/xLUz10AWVMLkTMAOcufxlmeD2IKRFnfgONzFyQj86ReRrB9GhH1N8X4SXvd0kHcF0m4ZmyNPFYD7z0z4XtuFXKemQ8ww/fs8/D/5f02+frdMRUDnpwNkR97F2H9nPlgk0aGiFATJXmIpmnDnU7nl+1PMPOdRLJfx3TFToQnE9XBjAMulytFQ3it/fAaIuyPLTcdSK2arjElGCPou3bj6MTJHZ1cfCHyVi2D7arL47IX3l8J3x9WmyUPzLQz+iCafLa4uHhKSUlJmydft9u9LVpuTSvKSm5ovLug1Wb0M3YXqVzPAurfDwMWzcWQT0rjDkQAOP7Qr4FwtJ6RxJBSfgDA6HiGJul66KOm2S+xcNrcik8XnQBMrhlbc+YtUzBg4VwoQxKbFBMs/xj+De+aqsnj8RxUVXUdUdtRAgAgIrvVavks1n65WCHqODudCGdpmqMkGbtS4l23233KxrQQRjoYRW4O8l55ISkbdfc9ZJKatoRCoQdtNuuk7lpgxgwRpWmQAdCEZOwKwR3auO0Jh0+bGhxAim/TiXLitdeh/2NnSmxv27atmhnfZ0ZDShz0Ik63J/teF4wcDKLu179NqQ+32/0RUfhaZjZ9FwtmbrdQiFKycIiZgiffKx26rIDuD0YijqKDY9bQ64KxYdFSyEOHU+7H6SyvaGw8cREzFgLwmmTWVVZW9s92aW+aZLsFbtoWpsWu1Wr1AHivfT6i7m0zSokVzBxKtDxV2vJNFyxyc3B2dfzr742jx1A94jKw399lXpb4zTnhmrmJ6IuCUFV1JJExKFEDRMSKklFeUlLSoSZUVfUiImNochJb+9L3lpZWHGqf7nA4vi2EHBg5ZlYqXC5XtzZHNE0bDoRbllowKwGXy9XlfEaglwWjd9oMNK55Laa8Jgdjml5Ar7lN63v2xhyIafomvSYYvSnqyklz+iCYuceXBAb+8j5Cpe74CpGsTY2aND2FhYA9AIp6SgAbBrwPPR53OWL+NFGfqqrOcrlc8zXN/hMpqdztdn+hquotRDwSkO85nWXlqqrerCihbbpuuVBRMNjvD22oqKg4oWnapYD8ATNVuVyuF+12+8VEdAYR6UKEldLS8h12u/0HHo/nz5pmn+J0et4CgKKiopFCiFFut/sNALDb7TcoChUxk9vlcm1u1nUXEQ90Ot2/j2jVNMdsALBY6p4qKdnta297zJgx/bKzz7Q7nWUfaFrROCL9QGlpxSGHw3GHEDjXMPhNj8ezs931TyRiBwAYBi/1eDy1qmqfRkRDgPBap3PrZ6qq/pSIz5MSb7jd7l2aVlQMiAkAVzidnnccDoddCPyrlNjudrs3AC2z4q+VEmvcbvf+Zv23MVPQ5XL9qenYPsUwcFhKebS8vHxf5Do0zXGPAKhH99ZuXLkm7rmKDFQXhuu6XK12Cu51OBz/yUzPMHNkjcNkQG5hViK/yPCxYVhXCEHzmcV5FRUVzZviyxvDYfknIo6s295PhBkAHlCUhi8BQAi6tenLo59FHFos4kEhaHrkWAhxo64bKwBMBwCHw/FdIu5nGFyqquosANC0qy9E01h6lq7nZjeXu03TioqZxZ0AkJmZ2R9Q5jSVEcW6bh3arOEmQG6xWCzV7S+eiG8IBvU/MBMrijGwKU3cAMgtgO1o86d8vZRYIwTuBgBmulZK7DUM/F+zDZWZqohoCgCMHTs2hwh3S4nnhcDvAGDMmDH9mOkrgFstZqJpQtDd5eXl+5rt3uxwOP4DoN+IAr1mJSdRyySDrG/A8Tnxz8RSDGNaMn6JeAsRzSCKbNnREcMwBEB1Ta+TM3KZqaCsrGxP5FhKaSXCYUB+XlKy2xfNVnHxqP4AFTODNc0+JZJutSoziYylACAEZzNTtRCi5uReP8qlhsExbHTFlUT8LYCu6DpvrFC2ELgTCC/vwrcCABkZGRkAAm63+wiadx/OysoSAECElr46ZmQC1HqyilUIjGfGh4KAoFWXk5h5s3kXEhsNTy6Ka64iM3uJcccwo25jMn6ZaT2RMd0weBWAL5qTNwKiGM3bkVgsZBdC3E9kLJBS7tY0LXf8+PGDiPhyTXPMYcb5qqpmWSyWoQD8gUCoZR00Eb/mdJaVMNNLAOD3Zw01DPljAP8GcLgpj3zf7w/+V2RVotPpWQvIXGae7HS65zXpFLcpCo0HMJhIXt9c7tXmMmsAIDOzoRHAXmb6ihlLrFb9EABIyZsAURwOh4e0v34p8dd+/Rp9QsgtoVDTHE9m/LXp+kORvtY/Op3uOU7n1s+aDkWJELhYUXhksw03ERcS8UYAKC8vP8yMtZrmmKPrxmwAcLlcDcx8ATPtPumdnpVSLh8/ftyY5uO3mOlRAG+2GcKvUnInsSKeRpIbhMbSzxjeX4nqUVfFNkWM2QBoBXT9iULUpx9c+ihtunYKDO87BaGa0ZDyYWZO6ULp47NmxxiI2CJ0fXShXnNvOhD7Nh36GQnQC8PehTY9NALMq8Fs+m6xwfKP4X/j1HdaBn/JBqYU6jXFw9Cw12wNaXofnXZ6D4HvSKFeexeILwNzuZlOTzlXkeGDlLMKQ7WjzjFq/mym3zS9my5HYApD3h2Fem0RIKc2/dRacpxYtz76XEVmZsbLVj14fmHY+9+Ejiv50vRt4lrj+zVwprTlPSqZHiLCGZ3l6+wBhoNBHLro8g5TxJhRoSD8i2H68U/i0ZOmbxHX2PTZwImCUO0TQucRAP9vvM58i59vE4gMfE1s3F6o11yVDsQ0Se1+cNCS5zAIK4mozWr8aDVj67mKzAiC5FOWkHde+ud+05gGA6LKmjut0pp3tNKWz5W2fD44eDi3x3vPA9x0Pu/Nr5GT8gXsab7BHMXArAPWvGcOWPNClbZ8No4cbQnE0I5dXGnL33PAknNNT+tM8w2iGv0HV1rzZhz57g+3B/5WGvBv/tvuY9//0c09rStN7+f/Af1ntdOMD6uxAAAAAElFTkSuQmCC",
    alt: "Partner 6",
  },
  {
    id: 7,
    src: "https://www.wtlogistic.uz/assets/partner6-CySi9i4F.png",
    alt: "Partner 7",
  },
  {
    id: 8,
    src: "https://www.wtlogistic.uz/assets/partner16-DaOPcQ4j.png",
    alt: "Partner 8",
  },
  {
    id: 9,
    src: "https://www.wtlogistic.uz/assets/partner9-Cv2BmpzE.png",
    alt: "Partner 9",
  },
  {
    id: 10,
    src: "https://www.wtlogistic.uz/assets/partner16-DaOPcQ4j.png",
    alt: "Partner 10",
  },
];

export default function Brand() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Bizning
            </span>{" "}
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
              hamkorlarimiz
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-full max-w-[200px] h-28 flex items-center justify-center p-6 bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
