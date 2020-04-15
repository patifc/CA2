<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">

<!-- This code was passed to me from Mikhail https://github.com/mikhail-cct/CA1-In-class-Demo -->
        <table id="results" border="1" class="indent table-hover">
            <thead>
                <tr>
                    <th colspan="13"></th>
                </tr>
                <tr>
                    <th colspan="8"> Name</th>
                    <th>Description</th>
                    <th>Breed</th>
                    <th>Age</th>
                    <th>Sex</th>
                    <th>Edit</th>

                </tr>
            </thead>

            <tbody>

                <xsl:for-each select="/puppyListing/puppy">
                    <tr id="{position()}">
                        <td align="right" colspan="7">
                            <input name="item0" type="checkbox" />
                            <xsl:value-of select="name" />

                            <button id="botao" type="button" class="btn btn-outline-success btn-sm">Adopt</button>

                            <td align="center"></td>

                        </td>


                        <td contenteditable="true">
                            <xsl:value-of select="description" />
                        </td>
                        <td contenteditable="true" align="right">
                            <xsl:value-of select="breed" />
                        </td>
                        <td contenteditable="true">
                            <xsl:value-of select="age" />
                        </td>

                        <td  contenteditable="true">
                            <xsl:value-of select="sex" />
                        </td>
                        <td>
                            <xsl:value-of select="edit" />
                            <button onclick="myFunction()" id="edit" class="btn btn-block btn-primary">Edit</button>
                        


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
                        </td>


                    </tr>
                </xsl:for-each>

            </tbody>
        </table>

<!-- This code was passed to me from Mikhail https://github.com/mikhail-cct/CA1-In-class-Demo -->
    </xsl:template>
</xsl:stylesheet>