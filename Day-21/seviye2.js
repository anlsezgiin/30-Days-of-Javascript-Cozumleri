// 1
for (let i = 0; i < paragraphs.length; i++)
    {
        paragraphs[i].className="colorBlue"
    }

// 2
for (let i = 0; i < paragraphs.length; i++)
    {
        if(i%2==0)
        {
            paragraphs[i].className="colorGreen"
        }
        else
        {
            paragraphs[i].className="colorRed"
        }
    }

// 3 (Burada ufak bir hatırlatma HTML'de id'ler uniquelerdir yani bir id yalnızca tek elemente verilir o yüzden id ile oynamadım.)
for (let i = 0; i < paragraphs.length; i++)
    {
        paragraphs[i].className="sameClass"
        paragraphs[i].textContent="Tüm paragraflar değiştirildi"
    }