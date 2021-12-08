 it.only('Download', function(){
     cy.viewport('iphone-xr')
     cy.visit("https://google.com")
     cy.get('.gLFyf').type("Arsenal").type("{enter}")
     cy.get('.MUFPAc > :nth-child(5) > a').click()
     cy.get('[data-ved="2ahUKEwjLtcfy8rz0AhXkiNgFHXtSDsYQMygBegUIARDKAQ"] > .wXeWr > .bRMDJf > .rg_i').click()
     cy.get('[data-ved="2ahUKEwj83JGa87z0AhVqMLcAHV0ZBHwQMygAegUIARDIAQ"] > .wXeWr > .bRMDJf > .rg_i').click()

 })